import SkillsData from "../data/SkillsData";

const Skills = () => {
	const skills = SkillsData;

	return (
		<section className="skills" id="skills">
			<h1>My Toolbox</h1>
			<ul className="flex flex-wrap gap-5 justify-center">
				{skills.map((category, index) => {
					return (
						<div
							className={
								"flex flex-col items-center border border-black rounded-2xl px-3 py-2 transition-shadow shadow-lg hover:shadow-2xl " + category.bgColor
							}
							key={index}
						>
							<p className="mb-2 font-bold">{category.categoryName}</p>
							<div className="flex flex-wrap justify-center gap-1">
								{category.skills.map((skill, index) => (
									<li
										key={index}
										className={
											"rounded-full flex items-center pl-3 pr-4 py-1 hover:font-bold hover:ring-2 hover:ring-slate-800 transition-all select-none border border-black " +
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
