import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Header = () => {
	// const baseClassName = "p-2 font-bold rounded-lg dark:rounded-none border-2 border-black border-4 border-b-8 border-e-8 hover:border-b-4 hover:border-e-4 hover:translate-x-[2px] hover:translate-y-[2px] transition-all";
	const baseClassName = "p-2 font-bold rounded-lg dark:rounded-none border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all";
	const { isSuperMode } = useContext(GlobalContext);
	const navLinks = [
		{
			href: "#about",
			className: `${baseClassName} dark:hover:bg-comic-red hover:bg-pastel-red dark:hover:text-white`,
			text: isSuperMode ? "Story" : "About",
		},
		{
			href: "#skills",
			className: `${baseClassName} dark:hover:bg-comic-blue hover:bg-pastel-blue dark:hover:text-white`,
			text: isSuperMode ? "Powers" : "Skills",
		},
		{
			href: "#experience",
			className: `${baseClassName} dark:hover:bg-comic-green hover:bg-pastel-green dark:hover:text-white`,
			text: isSuperMode ? "Journey" : "Experience",
		},
		{
			href: "#projects",
			className: `${baseClassName} dark:hover:bg-comic-yellow hover:bg-pastel-yellow dark:hover:text-white`,
			text: isSuperMode ? "Quests" : "Projects",
		},
		{
			href: "#contact",
			className: `${baseClassName} dark:hover:bg-comic-violet hover:bg-pastel-violet dark:hover:text-white`,
			text: isSuperMode ? "Signal Me" : "Contact",
		},
	];

	const [bgOpacity, setBgOpacity] = useState("");

	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () => {
				if (window.scrollY > 100) {
					setBgOpacity("bg-black text-white");
				} else {
					setBgOpacity("bg-white text-black");
				}
			});
		}
	}, []);
	return (
		<header className={`w-lvw sticky bg-white border-4 border-black top-0 transition-all z-10`}>
			<div className="container mx-auto py-4 px-4 md:px-0 flex items-center justify-between">
				<div className="logo font-bold text-5xl">VPG</div>
				<button className="md:hidden border-black border-4 border-r-8 border-b-8 p-2 flex flex-col gap-1" onClick={() => setShowMenu((prevValue) => !prevValue)}>
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
						<a key={index} href={link.href} className={link.className} type="button" onClick={() => setShowMenu(false)}>
							{link.text}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
};

export default Header;
