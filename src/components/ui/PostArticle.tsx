import { markdownStyledComponents, type Post } from "@/lib/posts";
import Markdown from "react-markdown";

export default function PostArticle({ post }: { post: Post }) {
    return (
        <article className="component-PostArticle mt-4 border border-gray-200 rounded-lg overflow-hidden">
            <h3 className="font-heading font-bold text-3xl/8 p-4 bg-gray-200">{post.title}</h3>
            <main className="p-4">
                <Markdown components={markdownStyledComponents}>{post.content}</Markdown>
            </main>
        </article>
    );
}
