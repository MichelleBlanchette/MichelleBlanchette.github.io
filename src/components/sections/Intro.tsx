import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Star } from "lucide-react";

export default function Intro() {
    return (
        <div className="component-Intro w-full py-24 bg-gradient-to-b from-white to-gray-100">
            <div className="max-w-5xl w-full p-4 mx-auto flex items-center justify-between gap-15">
                <div className="w-1/2 mb-10">
                    <div className="flex align-center gap-x-2 mb-2">
                        <Badge label="8+ Years Experience" color="violet" icon={Star} iconFilled />
                    </div>
                    <h1 className="font-heading text-7xl/14 font-bold my-5">Senior Full&#8209;Stack Web Developer</h1>
                    <p className="text-lg">Delivering data&#8209;driven results for Fortune 500 companies, start&#8209;ups, and small businesses since 2017.</p>
                    <ul className="flex items-center gap-x-4 mt-10">
                        <li>
                            <Button variant="primary" href="https://www.linkedin.com/in/michelle-blanchette/">Connect on LinkedIn</Button>
                        </li>
                        <li>
                            <Button variant="secondary" href="mailto:mblan.dev@gmail.com">Send Email</Button>
                        </li>
                    </ul>
                </div>
                <div className="w-1/2 text-center">
                    <div className="inline-block relative">
                        <div
                            className="
                                absolute
                                inset-0
                                rounded-full
                                -rotate-50
                                opacity-100
                                bg-[url(/Michelle-Blanchette_initials-tile.png)]
                                bg-size-[auto_30%]
                            "
                        />
                        <Image
                            className="relative rounded-full shadow-lg"
                            src="/Michelle-Blanchette.jpg"
                            alt="Michelle Blanchette smiling in professional attire on a bright blue background"
                            width={312}
                            height={500}
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
