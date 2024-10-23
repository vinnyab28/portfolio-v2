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
		<header className={`fixed w-full top-0 transition-all ${bgOpacity}`}>
			<div className="container mx-auto py-4 flex items-center justify-between">
				<div className="logo font-bold text-2xl">VPG</div>
				<nav className="flex gap-3">
					<a href="#about" type="button" className="p-2 rounded border border-gray-400 hover:border-black">
						About
					</a>
					<a href="#skills" type="button" className="p-2 rounded border border-gray-400 hover:border-black">
						Skills
					</a>
					<a href="#experience" type="button" className="p-2 rounded border border-gray-400 hover:border-black">
						Experience
					</a>
					<a href="#projects" type="button" className="p-2 rounded border border-gray-400 hover:border-black">
						Projects
					</a>
					<a href="#contact" type="button" className={`p-2 rounded border border-gray-400 hover:border-black`}>
						Contact
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
