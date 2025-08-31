export default function Skills() {

    const skills = [
        {
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
            title: "API & Backend Integration",
            description: "Seamless data flow and robust system architecture",
            skills: [
                "Node.js",
                "PHP",
                "REST APIs",
                "PostgreSQL",
                "Supabase",
                "Vercel",
                "Object caching",
            ]
        },
        {
            title: "WordPress Mastery",
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
        <div id="skills" className="component-Skills w-screen pb-24 bg-gray-100">
            <div className="max-w-5xl w-screen p-4 mx-auto text-center">
                <h2 className="font-heading text-6xl/10 font-bold my-5">Full-Stack Skillset<br /><span className="text-[0.75em]">to Provide End-to-End Solutions</span></h2>
                <p className="mt-2 text-lg">From API design to SEO optimization, I&rsquo;m able to drive real business impact across the entire tech stack.</p>
                <div className="grid grid-cols-2 gap-6 my-8">
                    {
                        skills.map(card => (
                            <div key={card.title} className="bg-white border border-gray-200 p-5 rounded-xl">
                                <h3 className="font-heading font-bold text-4xl/8">{card.title}</h3>
                                <p className="mt-2 mb-4 text-gray-700">{card.description}</p>
                                <ul className="flex flex-wrap space-x-2 space-y-2">
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
