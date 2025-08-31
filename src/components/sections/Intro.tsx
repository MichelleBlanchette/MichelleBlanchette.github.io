import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Star } from "lucide-react";

export default function Intro() {
    return (
        <div className="component-Intro w-screen py-24 bg-gradient-to-b from-white to-gray-100">
            <div className="max-w-5xl w-screen p-4 mx-auto flex items-center justify-between">
                <div className="w-1/2 mb-10">
                    <div className="flex align-center space-x-2 mb-2">
                        <Badge label="8+ Years Experience" color="violet" icon={Star} iconFilled />
                    </div>
                    <h1 className="font-heading text-7xl/14 font-bold my-5">Senior Full-Stack Web Developer</h1>
                    <p className="mt-2 text-lg">Delivering data-driven results for Fortune 500 companies, start-ups, and small businesses since 2017.</p>
                    <ul className="flex items-center space-x-4 mt-10">
                        <li>
                            <Button variant="primary" href="#projects">View Portfolio</Button>
                        </li>
                        <li>
                            <Button variant="secondary" href="/Michelle-Blanchette_resume.pdf" target="_blank" rel="noopener noreferrer">Download Resumé</Button>
                        </li>
                    </ul>
                </div>
                <div className="w-1/2 text-right relative">
                    <div
                        className="
                            absolute
                            top-0
                            right-0
                            rounded-full
                            w-[312px]
                            h-[500px]
                            rotate-310
                            opacity-100
                            bg-[url(/Michelle-Blanchette_initials-tile.png)]
                            bg-size-[auto_30%]
                        "
                    />
                    <Image
                        className="inline-block rounded-full shadow-lg relative"
                        src="/Michelle-Blanchette.jpg"
                        alt="Michelle Blanchette smiling in professional attire on a bright blue background"
                        width={312}
                        height={500}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
