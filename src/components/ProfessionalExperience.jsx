import { useState } from "react";
import ExperienceData from "../data/ExperienceData";

const ProfessionalExperience = () => {
	const experience = ExperienceData;
	const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);

	return (
		<section className="experience bg-comic-green" id="experience">
			<h1 className="text-white" style={{ textShadow: "4px 3px 1px black" }}>
				My Experience Map
			</h1>
			<div className="grid grid-cols-6 grid-rows-3 gap-4 w-full text-left">
				{experience.map((company, index) => (
					<button
						className={
							` border-4 border-r-8 border-b-8 border-black py-6 col-span-2 rounded-sm text-xl transition-all ` +
							(selectedCompanyIndex === index ? `bg-black text-white font-bold` : `bg-white`)
						}
						key={index}
						onClick={() => setSelectedCompanyIndex(index)}
					>
						{company.name}
					</button>
				))}
				<div className={`bg-white border-r-8 border-b-8 border-4 border-black shadow-lg  rounded-sm p-4 col-span-4 col-start-3 row-start-1 row-span-3 `}>
					<div className="header bg-white flex items-center gap-4 mb-4">
						<img src={experience[selectedCompanyIndex].logo} alt={experience[selectedCompanyIndex].name} className="w-24 max-h-12 object-contain" />
						<div className="title grow">
							<h2 className="text-lg font-bold">{experience[selectedCompanyIndex].name}</h2>
							<p className="italic text-sm">{"(" + experience[selectedCompanyIndex].startDate + " - " + experience[selectedCompanyIndex].endDate + ")"}</p>
						</div>
						<div className="text-right self-start text-sm">{experience[selectedCompanyIndex].location}</div>
						{/* <div className="stack grow flex gap-2">{project.technologies.split(",").map((technology, index) => <div key={index} className='border border-black rounded-full p-2'>{technology}</div>)}</div> */}
					</div>
					<div className="body h-auto overflow-y-scroll">
						<ul className="list-none list-inside">
							{experience[selectedCompanyIndex].summary.map((text, index) => (
								<li className="flex gap-4">
									<span style={{ textShadow: "3px 2px 1px black" }}>👉</span>
									<p>{text}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProfessionalExperience;
