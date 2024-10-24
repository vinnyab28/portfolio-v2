import { useEffect, useState } from "react";

const Header = () => {
	const [bgOpacity, setBgOpacity] = useState("");

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
		<header className={`fixed w-full bg-white border-4 border-black top-0 transition-all`}>
			<div className="container mx-auto py-4 flex items-center justify-between">
				<div className="logo font-bold text-5xl">VPG</div>
				<nav className="flex gap-3 font-bold ">
					<a href="#about" type="button" className="p-2 hover:bg-comic-red hover:text-white border-black border-4 border-r-8 border-b-8 transition-all">
						About
					</a>
					<a href="#skills" type="button" className="p-2 hover:bg-comic-blue hover:text-white border-black border-4 border-r-8 border-b-8 transition-all">
						Skills
					</a>
					<a href="#experience" type="button" className="p-2 hover:bg-comic-green hover:text-white border-black border-4 border-r-8 border-b-8 transition-all">
						Experience
					</a>
					<a href="#projects" type="button" className="p-2 hover:bg-comic-yellow border-black border-4 border-r-8 border-b-8 transition-all">
						Projects
					</a>
					<a href="#contact" type="button" className={`p-2 hover:bg-comic-violet hover:text-white border-black border-4 border-r-8 border-b-8 transition-all`}>
						Contact Me
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
