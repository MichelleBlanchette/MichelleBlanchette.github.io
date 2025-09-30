import * as matter from 'gray-matter';
import * as fs from 'fs';
import * as path from 'path';
import { Components } from "react-markdown";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const markdownStyledComponents = {
    a: ({node, ...props}) => {
        const newProps = { ...props };
        if ( newProps.href && "string" === typeof newProps.href ) {
            newProps.href = newProps.href.replace("http://", "https://"); // Force secure links.
            if (
                newProps.href.startsWith("https://") &&
                ! (
                    // Allowlist.
                    newProps.href.startsWith("https://purpleturtlecreative.com/") ||
                    newProps.href.startsWith("https://www.purpleturtlecreative.com/") ||
                    newProps.href.startsWith("https://www.linkedin.com/in/michelle-blanchette/") ||
                    newProps.href.startsWith("https://github.com/MichelleBlanchette")
                )
            ) {
                newProps.target = '_blank';
                newProps.rel = 'noopener noreferrer nofollow';
            }
        }

        return <a className="text-blue-600 hover:text-blue-800 underline underline-offset-2" {...newProps} />;
    },
    p: ({node, ...props}) => <p className="mb-4" {...props} />,
    ul: ({node, ...props}) => <ul className="list-disc list-outside mb-4 ml-5 pl-5" {...props} />,
    li: ({node, ...props}) => <li className="mb-1" {...props} />,
    code: ({node, ...props}) => <code className="bg-gray-200 rounded px-1.5 py-0.5 font-mono text-sm" {...props} />,
} as Components;
/* eslint-enable @typescript-eslint/no-unused-vars */

// Define the structure of a blog post.

type FeaturedImage = {
    src: string; // Image URL.
    caption: string; // Caption text for the image.
}

export type Post = {
    id: number; // Unique identifier for the post.
    date: string; // Published date formatted for display.
    short: string; // Twitter-like organic short relating to the post.
    title: string; // Article title.
    content: string; // The main content of the post in markdown format.
    images: FeaturedImage[]; // Array of images related to the post, if any.
};

// Directory where markdown files are stored.
const postsDirectory = path.join(process.cwd(), '_posts');

const loadedPostsCache: Post[] = [];

export function getAllPosts(): Post[] {

    if (loadedPostsCache.length > 0) {
        return loadedPostsCache;
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const posts: Post[] = fileNames.map((fileName, idx) => {
        const filePath = path.join(postsDirectory, fileName);
        const { data, content } = matter.read(filePath);

        const dateString = filePath.match(/\d{4}-\d{2}-\d{2}/);
        if ( ! dateString ) {
            throw new Error(`Filename ${fileName} does not contain a valid date.`);
        }

        const publishDate = new Date(`${dateString[0]}T12:00:00Z`); // Using noon UTC to avoid timezone issues.
        if ( isNaN(publishDate.getTime()) ) {
            throw new Error(`Invalid date in filename ${fileName}.`);
        }

        // Ensure required fields are present.
        if ( ! data.title ) {
            throw new Error(`Missing required front matter [title] in file ${fileName}.`);
        }
        if ( ! content ) {
            throw new Error(`Missing required content in file ${fileName}.`);
        }

        return {
            id: idx,
            date: publishDate.toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' }),
            short: data.short || "",
            title: data.title,
            content,
            images: data.images || [],
        };
    });

    // Sort posts by date in descending order.
    return posts.sort((a, b) => ((new Date(b.date)).getTime() - (new Date(a.date)).getTime()));
}
