import Image from "next/image";
import { AppWindow, Award, ChartNoAxesCombined, Code, DollarSign, Eye, Handshake, HeartHandshake, Package, RefreshCw, Rocket, SearchCode, Sprout, TrendingUp, Trophy, UsersRound } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function Experience() {

    const experiences = [
        {
            role: "Senior Web Developer",
            employer: "Henry Schein ONE, DentalPlans.com",
            employerAnnotation: <Badge label="Fortune 500" icon={Trophy} color="amber" />,
            employerLogo: "/images/logo-dentalplans.webp",
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
            role: "Founder, Lead Engineer",
            employer: "Purple Turtle Creative",
            employerAnnotation: <Badge label="Bootstrapped" icon={Code} color="emerald" />,
            employerLogo: "/images/logo-purple-turtle-creative.png",
            dates: "January 2020 – Present",
            description: "Single-handedly built a niche API WordPress plugin business from the ground up.",
            impacts: [
                {
                    icon: <Badge color="gray-dark" icon={Sprout} />,
                    metric: "112%",
                    description: "Revenue growth in 2nd year"
                },
                {
                    icon: <Badge color="gray-dark" icon={RefreshCw} />,
                    metric: "2.98x",
                    description: "Revenue-to-expense ratio"
                },
                {
                    icon: <Badge color="gray-dark" icon={Package} />,
                    metric: "25+",
                    description: "Plugins built and maintained"
                },
            ],
            skills: [
                "Product Engineering",
                "React",
                "API Integration",
                "WordPress",
                "Custom Analytics",
                "Workflow Automation",
                "DevOps",
                "CI/CD",
                "Documentation",
                "Open Source",
                "Business Administration",
            ]
        },
        {
            role: "Software Engineer",
            employer: "Hearst",
            employerAnnotation: <Badge label="Fortune Top 50" icon={Award} color="blue" />,
            employerLogo: "/images/logo-hearst.jpg",
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
            employerLogo: "/images/logo-peta.jpg",
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
        <div className="component-Experience w-full py-20 sm:py-24 bg-white">
            <div className="max-w-5xl w-full p-4 mx-auto text-center">
                <h2 className="font-heading text-[42px]/9 sm:text-6xl/12 font-bold mb-5">Professional Enterprise Experiences</h2>
                <p className="text-lg max-w-2xl mx-auto">With full-time work experiences at leading organizations, I know what it takes to operate at massive scale and consistently deliver results.</p>
                <div className="space-y-6 my-8 text-left">
                    {
                        experiences.map(job => (
                            <div key={job.dates} className="bg-white border border-gray-200 p-5 rounded-xl">
                                <div className="flex flex-col sm:flex-row sm:flex-nowrap items-start justify-start gap-4 mb-4">
                                    <Image className="rounded-lg" src={job.employerLogo} alt="Company logo" width={64} height={64} />
                                    <div className="flex-1 text-left">
                                        <h3 className="font-heading font-bold text-3xl/8 flex flex-col-reverse sm:flex-row items-start gap-2">
                                            {job.role}
                                            {job.employerAnnotation}
                                        </h3>
                                        <p className="text-sm text-gray-700">{`${job.employer} • ${job.dates}`}</p>
                                        <p className="mt-2 text-gray-700">{job.description}</p>
                                    </div>
                                    <div className="flex-1 ml-auto">
                                        <ul className="flex flex-row flex-wrap justify-start sm:justify-end gap-x-2 gap-y-2">
                                            {
                                                job.skills.map(skill => (
                                                    <li key={skill} className="px-2 py-1 border border-gray-200 rounded-lg text-xs font-semibold cursor-default hover:bg-black hover:border-black hover:text-white">{skill}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                <div
                    className="
                        bg-white
                        rounded-xl
                        text-left
                        overflow-hidden
                        border
                        border-gray-300
                        bg-[url(/images/Michelle-Blanchette_initials-tile.png)]
                        bg-size-[auto_150px]
                    "
                >
                    <div className="bg-gray-900 text-white p-9 sm:p-12 sm:pr-[15%] w-fit [clip-path:polygon(0_0,100%_0,70%_100%,0%_100%)] sm:[clip-path:polygon(0_0,100%_0,85%_100%,0%_100%)]">
                        <h3 className="font-heading font-bold text-3xl/6 sm:text-4xl/8">Ready to drive similar results for your project?</h3>
                        <p className="my-2">Let&rsquo;s discuss how my expertise can accelerate your business goals.</p>
                        <ul className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                            <li>
                                <Button variant="secondary" href="https://www.linkedin.com/in/michelle-blanchette/">Connect on LinkedIn</Button>
                            </li>
                            <li>
                                <Button variant="tertiary" href="mailto:mblan.dev@gmail.com">Send Email</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
