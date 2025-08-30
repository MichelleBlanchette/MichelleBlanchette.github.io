import Image from "next/image";

export default function Navbar() {

    const navLinks = [
        { href: "#", label: "Home" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="component-Navbar fixed top-0 w-screen flex justify-center py-2">
            <div className="max-w-5xl w-screen flex items-center justify-between py-2 pl-2 pr-10 shadow bg-gradient-to-r from-gray-100/80 to-gray-50/80 backdrop-blur rounded-full">
                <div className="flex items-center space-x-2">
                    <Image
                        className="rounded-full"
                        src="/favicon.png"
                        alt="MB initials logo"
                        width={40}
                        height={40}
                    />
                    <p className="font-heading text-3xl/7 font-bold tracking-tight">Michelle Blanchette</p>
                </div>
                <nav>
                    <ul className="flex">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a href={link.href} className="rounded-full py-1 px-2 text-black/60 hover:text-black">{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
