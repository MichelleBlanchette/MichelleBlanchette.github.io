import { Database, Globe, Wallpaper, Zap } from "lucide-react";
import Badge from "../ui/Badge";

export default function Skills() {

    const skills = [
        {
            badge: <Badge color="fuchsia" icon={Wallpaper} />,
            title: "Frontend Excellence",
            description: "Modern React ecosystem with enterprise-grade solutions",
            skills: [
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "Redux Toolkit",
                "MaterialUI (MUI)",
                "Cypress",
            ]
        },
        {
            badge: <Badge color="emerald" icon={Database} />,
            title: "API & Backend Integration",
            description: "Seamless data flow and robust system architecture",
            skills: [
                "Node.js",
                "PHP",
                "REST APIs",
                "PostgreSQL",
                "Supabase",
                "Vercel",
                "Docker",
            ]
        },
        {
            badge: <Badge color="blue" icon={Globe} />,
            title: "WordPress CMS Mastery",
            description: "Expertise in building and optimizing WordPress sites",
            skills: [
                "WordPress VIP",
                "Plugin Development",
                "Custom Themes",
                "Block Editor",
                "Multisite (wpmu)",
                "WordPress REST API",
                "WooCommerce",
                "Advanced Custom Fields",
            ]
        },
        {
            badge: <Badge color="amber" icon={Zap} />,
            title: "Performance & Growth",
            description: "Data-driven optimization and business growth strategies",
            skills: [
                "Real user monitoring (RUM)",
                "Performance Optimization",
                "Analytics Integration",
                "A/B Testing",
                "Technical SEO",
                "Automated Testing",
            ]
        },
    ];

    return (
        <div className="component-Skills w-full pb-24 bg-gray-100">
            <div className="max-w-5xl w-full p-4 mx-auto text-center">
                <h2 className="font-heading text-6xl/12 font-bold mb-5">Complete Package Skillset</h2>
                <p className="text-lg max-w-2xl mx-auto">From snappy frontends to scalable backends, I&rsquo;m able to provide end&#8209;to&#8209;end solutions that drive real business impact across the entire tech stack.</p>
                <div className="grid grid-cols-2 gap-6 my-8 text-left">
                    {
                        skills.map(card => (
                            <div key={card.title} className="bg-white border border-gray-200 p-5 rounded-xl">
                                <div className="flex items-start justify-start gap-4 mb-4">
                                    {card.badge}
                                    <div className="flex-1">
                                        <h3 className="font-heading font-bold text-3xl/8">{card.title}</h3>
                                        <p className="mt-1 text-sm text-gray-700">{card.description}</p>
                                    </div>
                                </div>
                                <ul className="flex flex-row flex-wrap gap-x-2 gap-y-2">
                                    {
                                        card.skills.map(skill => (
                                            <li key={skill} className="px-2 py-1 border border-gray-200 rounded-lg text-xs font-semibold cursor-default hover:bg-black hover:border-black hover:text-white">{skill}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
