import PostArticle from "@/components/ui/PostArticle";
import PostToggle from "@/components/ui/PostToggle";
import { getAllPosts, markdownStyledComponents } from "@/lib/posts";
import Image from "next/image";
import { ReactNode } from "react";
import Markdown from "react-markdown";

export default function RecentActivity({ maxPosts, title, body } : { maxPosts?: number, title?: ReactNode, body?: ReactNode }) {
    const posts = maxPosts ? getAllPosts().slice(0, maxPosts) : getAllPosts();

    const titleText = title || <>Recent Activity &amp; Impact</>;
    const bodyText = body || <>I&rsquo;m always shipping changes and measuring impact to strategize what&rsquo;s next.<br />Here&rsquo;s a few highlights from my recent projects.</>;

    return (
        <div className="component-RecentActivity w-full sm:py-24 bg-gradient-to-b from-white to-gray-100">
            <div className="max-w-5xl w-full p-4 mx-auto text-center">
                <h2 className="font-heading text-[42px]/9 sm:text-6xl/12 font-bold mb-5">{titleText}</h2>
                <p className="text-lg max-w-2xl mx-auto">{bodyText}</p>
                <div className="max-w-2xl mx-auto my-8 text-left bg-white border border-gray-200 rounded-xl shadow-md sm:shadow-lg">
                    {
                        posts.map(post => (
                            <div key={post.id} className="border-b border-gray-200 p-5">
                                <div className="flex items-center gap-2 mb-4">
                                    <Image className="rounded-full" src="/images/Michelle-Blanchette_avatar.jpg" alt="" width={48} height={48} />
                                    <p className="leading-tight">
                                        <span className="font-bold">Michelle Blanchette</span><br />
                                        <span className="text-sm text-gray-500">{post.date}</span>
                                    </p>
                                </div>
                                {
                                    post?.short ?
                                    (<>
                                        <Markdown components={markdownStyledComponents}>{post.short}</Markdown>
                                        <PostToggle renderedPost={<PostArticle post={post} />} />
                                    </>) :
                                    <PostArticle post={post} />
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
