import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AboutMe = () => {
	const { isSuperMode } = useContext(GlobalContext);
	return (
		<section className="about-me dark:bg-comic-red bg-pastel-red dark:text-white text-center" id="about">
			<h1 className="dark:comic-shadow-dark">{isSuperMode ? "Who I Am" : "About Me"}</h1>
			<div className="summary mx-auto font-bold text-xl w-3/4">
				<p>
					Hi there! I’m passionate about using my skills to give back to the community. I enjoy working with Angular and find React to be a fun challenge. I love creating personal websites to support the Open Source community and build projects that
					make a difference. I pay close attention to UI details because I believe that sometimes, simplicity is key. 🤔
				</p>
				<br></br>
				<p>In my free time, I’m a big fan of Formula 1 🏎️ and love playing the guitar 🎸. I’d love to chat about F1, FRIENDS, or SPORTS!</p>
			</div>
		</section>
	);
};

export default AboutMe;
