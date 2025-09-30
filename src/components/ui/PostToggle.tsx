"use client";

import { useCallback, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function PostToggle({ renderedPost }: { renderedPost?: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = useCallback(() => {
        setIsOpen(prevState => !prevState);
    }, []);

    return (
        <div className="component-PostToggle">
            <button
                className="cursor-pointer flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
                type="button"
                onClick={handleToggle}
            >
                {isOpen ? "Hide story" : "Show story"}
                <ChevronUp className={`transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-180"}`} size={16} />
            </button>
            {isOpen ? renderedPost : null}
        </div>
    );
}
