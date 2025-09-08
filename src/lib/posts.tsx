import * as matter from 'gray-matter';
import * as fs from 'fs';
import * as path from 'path';

// Define the structure of a blog post.

type FeaturedImage = {
    src: string; // Image URL.
    caption: string; // Caption text for the image.
}

type Post = {
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
        if (!dateString) {
            throw new Error(`Filename ${fileName} does not contain a valid date.`);
        }

        const publishDate = new Date(`${dateString[0]}T12:00:00Z`); // Using noon UTC to avoid timezone issues.
        if (isNaN(publishDate.getTime())) {
            throw new Error(`Invalid date in filename ${fileName}.`);
        }

        // Ensure required fields are present.
        if (!data.title) {
            throw new Error(`Missing required front matter in file ${fileName}.`);
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
