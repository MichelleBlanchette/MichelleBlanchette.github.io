"use client";

import { Post } from "@/lib/posts";
import { useCallback, useState } from "react";
import { ChevronUp, Images } from "lucide-react";
import Badge from "./Badge";

export default function PostToggle({ renderedPost, post }: { renderedPost?: React.ReactNode, post: Post }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = useCallback(() => {
        setIsOpen(prevState => !prevState);
    }, []);

    return (
        <div className="component-PostToggle">
            <div className="flex align-center justify-start gap-2">
                {
                    post?.images?.length > 0 && (
                        <Badge icon={Images} label={`${post.images.length} image${post.images.length > 1 ? 's' : ''}`} color="gray" />
                    )
                }
                <button
                    className="
                        cursor-pointer
                        flex
                        items-center
                        justify-between
                        gap-1
                        text-sm
                        font-medium
                        text-blue-600
                        hover:text-blue-800
                    "
                    type="button"
                    onClick={handleToggle}
                >
                    {isOpen ? "Hide story" : "Show story"}
                    <ChevronUp className={`transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-180"}`} size={16} />
                </button>
            </div>
            {isOpen ? renderedPost : null}
        </div>
    );
}
