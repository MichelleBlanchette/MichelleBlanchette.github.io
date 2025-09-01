export default function Navbar() {

    const navLinks = [
        { href: "#", label: "Home" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="component-Navbar w-full fixed top-0 z-999">
            <div className="max-w-5xl w-full p-4 mx-auto flex items-center justify-between">
                <div className="w-full flex items-center justify-between py-2 pl-2 pr-10 shadow-md bg-gradient-to-r from-gray-200/50 to-gray-50/90 backdrop-blur rounded-full">
                    <div className="flex items-center gap-x-2">
                        <div
                            className="
                                bg-[url(/Michelle-Blanchette_logo.svg)]
                                bg-size-[66%]
                                bg-no-repeat
                                bg-center
                                bg-white
                                border-2 border-gray-200
                                w-[40px]
                                h-[40px]
                                rounded-full
                            "
                        />
                        <p className="font-heading text-3xl/7 font-bold tracking-tight">Michelle Blanchette</p>
                    </div>
                    <nav>
                        <ul className="flex">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="rounded-md py-2 px-3 font-medium text-black/70 hover:text-black hover:bg-white hover:shadow-sm">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
