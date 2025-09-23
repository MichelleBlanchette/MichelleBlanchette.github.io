import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Star } from "lucide-react";

export default function Intro() {
    return (
        <div className="component-Intro w-full py-20 sm:py-24 bg-gradient-to-b from-white to-gray-100 text-center sm:text-left">
            <div className="max-w-5xl w-full p-4 mx-auto flex flex-col sm:flex-row items-center justify-between sm:gap-15">
                <div className="sm:w-1/2 sm:mb-10">
                    <div className="flex align-center gap-x-2 mb-2 mx-auto sm:mx-0 w-fit">
                        <Badge label="8+ Years Experience" color="violet" icon={Star} iconFilled />
                    </div>
                    <h1 className="font-heading text-5xl/10 sm:text-7xl/14 font-bold my-5">Senior Full&#8209;Stack Web&nbsp;Developer</h1>
                    <p className="text-lg">Delivering data&#8209;driven results for Fortune&nbsp;500 companies, start&#8209;ups, and small businesses since&nbsp;2017.</p>
                    <ul className="flex items-center justify-center sm:justify-start gap-x-4 mt-10">
                        <li>
                            <Button variant="primary" href="https://www.linkedin.com/in/michelle-blanchette/">Connect on LinkedIn</Button>
                        </li>
                        <li>
                            <Button variant="secondary" href="mailto:mblan.dev@gmail.com">Send Email</Button>
                        </li>
                    </ul>
                </div>
                <div className="w-1/2 mx-auto hidden sm:block text-center">
                    <div className="inline-block relative">
                        <div
                            className="
                                absolute
                                inset-0
                                rounded-full
                                -rotate-50
                                bg-[url(/Michelle-Blanchette_initials-tile.png)]
                                bg-size-[auto_150px]
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
