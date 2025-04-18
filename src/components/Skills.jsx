import { useContext } from "react";
import "../assets/styles/Skills.css";
import { GlobalContext } from "../context/GlobalContext";
import SkillsData from "../data/SkillsData";

const Skills = () => {
	const skills = SkillsData;
	const { isSuperMode } = useContext(GlobalContext);

	return (
		<section className="skills dark:bg-comic-blue bg-pastel-blue" id="skills">
			<h1 className="dark:text-white dark:comic-shadow-dark">{isSuperMode ? "My Utility Belt" : "Skills"}</h1>
			<div className="flex flex-wrap gap-5 justify-center">
				{skills.map((category, index) => {
					return (
						<div className={"flex flex-col items-center border-2 dark:border-4 dark:border-r-8 dark:border-b-8 border-black rounded-lg dark:rounded-none px-3 py-3 transition-shadow shadow-lg " + category.bgColor} key={index}>
							<p className="mb-2 font-bold">{category.categoryName}</p>
							<ul className="skill-list flex flex-wrap justify-center md:gap-2 gap-2">
								{category.skills.map((skill, index) => (
									<li key={index} className={"skill-list-item flex items-center pl-3 pr-4 py-1 transition-all select-none border-black border-4 border-r-8 border-b-8 ] " + category.pillBgColor}>
										{skill.logo && <img src={skill.logo} alt={skill.name} className="h-4 mr-2" />}
										{skill.name}
									</li>
								))}
							</ul>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Skills;
