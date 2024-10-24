import SkillsData from "../data/SkillsData";

const Skills = () => {
	const skills = SkillsData;

	return (
		<section className="skills bg-comic-blue" id="skills">
			<h1 className="text-white" style={{ textShadow: "4px 3px 1px black" }}>
				My Toolbox
			</h1>
			<ul className="flex flex-wrap gap-5 justify-center">
				{skills.map((category, index) => {
					return (
						<div
							className={
								"flex flex-col items-center border-4 border-r-8 border-b-8 border-black rounded-sm px-3 py-3 transition-shadow shadow-lg " + category.bgColor
							}
							key={index}
						>
							<p className="mb-2 font-bold">{category.categoryName}</p>
							<div className="flex flex-wrap justify-center gap-1">
								{category.skills.map((skill, index) => (
									<li
										key={index}
										className={
											"flex items-center pl-3 pr-4 py-1 hover:font-bold  transition-all select-none border-4 border-r-8 border-b-8 border-black " +
											category.pillBgColor
										}
									>
										{skill.logo && <img src={skill.logo} alt={skill.name} className="h-4 mr-2" />}
										{skill.name}
									</li>
								))}
							</div>
						</div>
					);
				})}
			</ul>
		</section>
	);
};

export default Skills;
