import Image from "next/image";
import { AppWindow, Award, ChartNoAxesCombined, DollarSign, Eye, Handshake, HeartHandshake, Rocket, SearchCode, TrendingUp, Trophy, UsersRound } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function Experience() {

    const experiences = [
        {
            role: "Senior Web Developer",
            employer: "Henry Schein ONE, DentalPlans.com",
            employerAnnotation: <Badge label="Fortune 500" icon={Trophy} color="amber" />,
            employerLogo: "/logo-dentalplans.webp",
            dates: "October 2023 – Present",
            description: "Leading website development and optimization efforts to maximize conversions and serve our users.",
            impacts: [
                {
                    icon: <Badge color="gray-dark" icon={TrendingUp} />,
                    metric: "2X",
                    description: "Increase in conversion rate"
                },
                {
                    icon: <Badge color="gray-dark" icon={SearchCode} />,
                    metric: "85%",
                    description: "Improved crawl rate for SEO"
                },
                {
                    icon: <Badge color="gray-dark" icon={UsersRound} />,
                    metric: "700K+",
                    description: "Monthly active users"
                },
            ],
            skills: [
                "React",
                "API Integration",
                "WordPress VIP",
                "SEO",
                "Performance Optimization",
                "A/B Testing",
                "Real User Monitoring (RUM)",
            ]
        },
        {
            role: "Software Engineer",
            employer: "Hearst",
            employerAnnotation: <Badge label="Fortune Top 50" icon={Award} color="blue" />,
            employerLogo: "/logo-hearst.jpg",
            dates: "July 2021 – July 2022",
            description: "Rapidly developed innovative digital marketing initiatives driving new revenue streams across multiple markets.",
            impacts: [
                {
                    icon: <Badge color="gray-dark" icon={Rocket} />,
                    metric: "95%",
                    description: "Automated content workflow"
                },
                {
                    icon: <Badge color="gray-dark" icon={Handshake} />,
                    metric: "250+",
                    description: "Brand partnerships"
                },
                {
                    icon: <Badge color="gray-dark" icon={ChartNoAxesCombined} />,
                    metric: "$4M+",
                    description: "Annual revenue within 2 years"
                },
            ],
            skills: [
                "React",
                "API Integration",
                "WordPress",
                "Custom Analytics",
                "Product Engineering",
                "Workflow Automation",
                "Data-Driven Email Marketing",
            ]
        },
        {
            role: "WordPress Developer",
            employer: "PETA",
            employerAnnotation: <Badge label="Global Nonprofit" icon={HeartHandshake} color="fuchsia" />,
            employerLogo: "/logo-peta.jpg",
            dates: "August 2020 – July 2021",
            description: "Launched, supported, and optimized advocacy websites across 10 international regions.",
            impacts: [
                // Source: https://www.peta.org/wp-content/uploads/2022/04/PETA-FY21-AFS.pdf
                {
                    icon: <Badge color="gray-dark" icon={AppWindow} />,
                    metric: "45+",
                    description: "Sites managed and deployed"
                },
                {
                    icon: <Badge color="gray-dark" icon={Eye} />,
                    metric: "83M+",
                    description: "Page views across all websites"
                },
                {
                    icon: <Badge color="gray-dark" icon={DollarSign} />,
                    metric: "$72M+",
                    description: "Total annual revenue generated"
                },
            ],
            skills: [
                "WordPress",
                "JavaScript",
                "PHP",
                "Pixel-Perfect Frontends",
                "Legacy Codebases",
                "DevOps Automation",
                "Docker",
                "WordPress Plugin Development",
            ]
        },
    ];

    return (
        <div className="component-Experience w-full py-24 bg-white">
            <div className="max-w-5xl w-full p-4 mx-auto text-center">
                <h2 className="font-heading text-6xl/12 font-bold mb-5">Professional Enterprise Experiences</h2>
                <p className="text-lg max-w-2xl mx-auto">With full-time work experiences at leading organizations, I know what it takes to operate at massive scale and consistently deliver results.</p>
                <div className="space-y-6 my-8 text-left">
                    {
                        experiences.map(job => (
                            <div key={job.dates} className="bg-white border border-gray-200 p-5 rounded-xl">
                                <div className="flex items-start justify-start gap-4 mb-4">
                                    <Image className="rounded-lg" src={job.employerLogo} alt="Company logo" width={64} height={64} />
                                    <div className="flex-1 text-left">
                                        <h3 className="font-heading font-bold text-3xl/8 flex items-start gap-2">
                                            {job.role}
                                            {job.employerAnnotation}
                                        </h3>
                                        <p className="text-sm text-gray-700">{`${job.employer} • ${job.dates}`}</p>
                                        <p className="mt-2 text-gray-700">{job.description}</p>
                                    </div>
                                    <div className="flex-1 ml-auto">
                                        <ul className="flex flex-row flex-wrap justify-end gap-x-2 gap-y-2">
                                            {
                                                job.skills.map(skill => (
                                                    <li key={skill} className="px-2 py-1 border border-gray-200 rounded-lg text-xs font-semibold cursor-default hover:bg-black hover:border-black hover:text-white">{skill}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <ul className="grid grid-cols-3 gap-4">
                                    {
                                        job.impacts.map(impact => (
                                            <li key={impact.metric} className="flex items-start justify-start gap-4 p-4 bg-gray-100 rounded-lg">
                                                {impact.icon}
                                                <div className="flex-1">
                                                    <h3 className="font-heading font-bold text-4xl/8">{impact.metric}</h3>
                                                    <p className="text-sm text-gray-700">{impact.description}</p>
                                                </div>
                                            </li>
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
