import type { LucideIcon } from "lucide-react";

const colorClasses = {
    "gray": "bg-gray-100 text-gray-800 border-gray-200",
    "violet": "bg-violet-100 text-violet-800 border-violet-200",
};

type ColorKey = keyof typeof colorClasses;

export default function Badge(
    {
        label,
        color = "gray",
        icon: Icon,
        iconFilled = false,
    }: {
        label: string,
        color?: ColorKey,
        icon?: LucideIcon,
        iconFilled?: boolean,
    }
) {
    return (
        <p className={`inline-flex items-center rounded-full m-0 pl-2 pr-3 py-[0.15em] text-xs border ${colorClasses[color]}`}>
            {Icon && <Icon className={`inline-block mr-2 w-[1.3em] ${iconFilled ? "fill-current stroke-width-0" : ""}`} />}
            <span className="font-semibold">{label}</span>
        </p>
    );
}
