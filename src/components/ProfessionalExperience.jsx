import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ExperienceData from "../data/ExperienceData";

const ProfessionalExperience = () => {
	const baseClassName = "py-6 font-bold rounded-lg dark:rounded-none border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] text-xl transition-all md:col-span-2";
	const experience = ExperienceData;
	const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);
	const { isSuperMode } = useContext(GlobalContext);

	return (
		<section className="experience dark:bg-comic-green bg-pastel-green" id="experience">
			<h1 className="dark:text-white dark:comic-shadow-dark">{isSuperMode ? "My Journey Map" : "Experience"}</h1>
			<div className="grid md:grid-cols-6 md:grid-rows-3 grid-cols-1 grid-rows-2 gap-4 w-full text-left">
				{experience.map((company, index) => (
					<button className={` ${baseClassName} ` + (selectedCompanyIndex === index ? `shadow-none translate-x-[4px] translate-y-[4px] bg-black text-white font-bold` : `bg-white`)} key={index} onClick={() => setSelectedCompanyIndex(index)}>
						{company.name}
					</button>
				))}
				<div className={`bg-white border-2 dark:border-r-8 dark:border-b-8 dark:border-4 border-black shadow-lg rounded-lg dark:rounded-sm p-4 md:col-span-4 md:col-start-3 md:row-start-1 md:row-span-3 `}>
					<div className="header bg-white flex flex-col md:flex-row items-center gap-4 mb-4">
						<img src={experience[selectedCompanyIndex].logo} alt={experience[selectedCompanyIndex].name} className="md:w-24 md:max-h-12 w-48 max-h-24 object-contain" />
						<div className="title grow md:text-left text-center">
							<h2 className="text-3xl font-bold pb-0">{experience[selectedCompanyIndex].name}</h2>
							<p className="italic text-sm">{"(" + experience[selectedCompanyIndex].startDate + " - " + experience[selectedCompanyIndex].endDate + ")"}</p>
						</div>
						<div className="text-right md:self-start text-sm">{experience[selectedCompanyIndex].location}</div>
						{/* <div className="stack grow flex gap-2">{project.technologies.split(",").map((technology, index) => <div key={index} className='border border-black rounded-full p-2'>{technology}</div>)}</div> */}
					</div>
					<div className="body h-auto overflow-y-scroll">
						<ul className="list-none list-inside">
							{experience[selectedCompanyIndex].summary.map((text, index) => (
								<li key={index} className="flex gap-4">
									<span className="dark:comic-shadow-dark">👉</span>
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
