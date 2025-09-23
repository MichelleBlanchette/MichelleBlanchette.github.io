import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import Markdown, { Components } from "react-markdown";

/* eslint-disable @typescript-eslint/no-unused-vars */
const markdownStyledComponents = {
    p: ({node, ...props}) => <p className="mb-4" {...props} />,
    ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4" {...props} />,
    li: ({node, ...props}) => <li className="mb-1" {...props} />,
    code: ({node, ...props}) => <code className="bg-gray-200 rounded px-1.5 py-0.5 font-mono text-sm" {...props} />,
} as Components;
/* eslint-enable @typescript-eslint/no-unused-vars */

export default function RecentActivity() {
    const posts = getAllPosts().slice(0, 8);
    return (
        <div className="component-RecentActivity w-full sm:py-24 bg-gradient-to-b from-white to-gray-100">
            <div className="max-w-5xl w-full p-4 mx-auto text-center">
                <h2 className="font-heading text-[42px]/10 sm:text-6xl/12 font-bold mb-5">Recent Activity &amp; Impact</h2>
                <p className="text-lg max-w-2xl mx-auto">I&rsquo;m always shipping changes and measuring impact to strategize what&rsquo;s next.<br />Here&rsquo;s a few highlights from my recent projects.</p>
                <div className="max-w-2xl mx-auto my-8 text-left bg-white border border-gray-200 rounded-xl shadow-md sm:shadow-lg">
                    {
                        posts.map(post => (
                            <div key={post.id} className="border-b border-gray-200 p-5">
                                <div className="flex items-center gap-2 mb-4">
                                    <Image className="rounded-full" src="/Michelle-Blanchette_avatar.jpg" alt="" width={48} height={48} />
                                    <p className="leading-tight">
                                        <span className="font-bold">Michelle Blanchette</span><br />
                                        <span className="text-sm text-gray-500">{post.date}</span>
                                    </p>
                                </div>
                                {
                                    post?.short ?
                                    ( <Markdown components={markdownStyledComponents}>{post.short}</Markdown> ) :
                                    (<>
                                        <h3 className="font-heading font-bold text-3xl/8 mb-2">{post.title}</h3>
                                        <Markdown components={markdownStyledComponents}>{post.content}</Markdown>
                                    </>)
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
