import { getAllPosts } from "@/lib/posts";
import Markdown from "react-markdown";

export default function RecentActivity() {
    const posts = getAllPosts().slice(0, 8);
    return (
        <div className="component-RecentActivity w-full py-24 bg-white">
            <div className="max-w-5xl w-full p-4 mx-auto text-center">
                <h2 className="font-heading text-6xl/12 font-bold mb-5">Recent Activity &amp; Impact</h2>
                <p className="text-lg max-w-2xl mx-auto">I&rsquo;m always shipping changes and measuring impact to strategize what&rsquo;s next.<br />Here&rsquo;s a few highlights from my recent projects.</p>
                <div className="space-y-6 my-8 text-left">
                    {
                        posts.map(post => (
                            <div key={post.id} className="bg-white border border-gray-200 p-5 rounded-xl">
                                <h3 className="font-heading font-bold text-3xl/8 mb-2">{post.title}</h3>
                                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                                <Markdown>{post.content}</Markdown>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
