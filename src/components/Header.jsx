import { useEffect, useState } from "react";

const Header = () => {
	const baseClassName = "p-2 font-bold border-black border-4 border-r-8 border-b-8 transition-all";
	const navLinks = [
		{
			href: "#about",
			className: `${baseClassName} hover:bg-comic-red hover:text-white`,
			text: "Story",
		},
		{
			href: "#skills",
			className: `${baseClassName} hover:bg-comic-blue hover:text-white`,
			text: "Powers",
		},
		{
			href: "#experience",
			className: `${baseClassName} hover:bg-comic-green hover:text-white`,
			text: "Journey",
		},
		{
			href: "#projects",
			className: `${baseClassName} hover:bg-comic-yellow`,
			text: "Quests",
		},
		{
			href: "#contact",
			className: `${baseClassName} hover:bg-comic-violet hover:text-white`,
			text: "Signal Me",
		},
	];

	const [bgOpacity, setBgOpacity] = useState("");

	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () => {
				console.log(window.scrollY);
				if (window.scrollY > 100) {
					setBgOpacity("bg-black text-white");
				} else {
					setBgOpacity("bg-white text-black");
				}
			});
		}
	}, []);
	return (
		<header className={`fixed w-lvw bg-white border-4 border-black top-0 transition-all`}>
			<div className="container mx-auto py-4 px-4 md:px-0 flex items-center justify-between">
				<div className="logo font-bold text-5xl">VPG</div>
				<button
					className="md:hidden border-black border-4 border-r-8 border-b-8 p-3 flex flex-col gap-1"
					onClick={() => setShowMenu((prevValue) => !prevValue)}
				>
					<span className="hamburger-icon h-1 w-6 bg-black hamburger-icon-1"></span>
					<span className="hamburger-icon h-1 w-6 bg-black hamburger-icon-2"></span>
					<span className="hamburger-icon h-1 w-6 bg-black hamburger-icon-3"></span>
				</button>
				<nav className="md:flex gap-3 hidden">
					{navLinks.map((link, index) => (
						<a key={index} href={link.href} className={link.className} type="button">
							{link.text}
						</a>
					))}
				</nav>
			</div>
			<div className={`nav-panel w-lvw  md:hidden overflow-auto ${showMenu ? "h-auto" : "h-0"}`}>
				<nav className="flex align-center p-4 border-t-2 flex-col gap-2">
					{navLinks.map((link, index) => (
						<a key={index} href={link.href} className={link.className} type="button">
							{link.text}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
};

export default Header;
