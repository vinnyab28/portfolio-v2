import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { DesignProjectsData, WebProjectsData } from "../data/ProjectsData";
import TooltipElement from "./TooltipElement";

const ProjectsSection = () => {
	const webProjects = WebProjectsData;
	const designProjects = DesignProjectsData;
	const { isSuperMode } = useContext(GlobalContext);

	return (
		<section className="projects dark:bg-comic-yellow bg-pastel-yellow" id="projects">
			<h1 className="dark:comic-shadow-light">{isSuperMode ? "My Quest Collection" : "Projects"}</h1>
			<div>
				<h2 className="font-bold text-left">Web {isSuperMode ? "Quests" : "Projects"}</h2>
				<div className="grid md:grid-cols-3 grid-cols-1 gap-4">
					{webProjects.map((project, index) => {
						return (
							<div className="project-card bg-white flex flex-col border-black border-2 dark:border-4 dark:border-r-8 dark:border-b-8 rounded-sm p-4 overflow-hidden" key={index}>
								<div className="project-card-header flex items-center gap-4">
									<div className="project-card-icon flex  rounded-sm justify-center items-center">
										{/* <img src={project.image} className="w-12 h-12" /> */}
										{project.image.length > 5 ? <img src={project.image} className="h-8" alt={project.title} /> : <p className="text-3xl dark:comic-shadow-dark">{project.image}</p>}
										{/* <p className="text-3xl " style={{ textShadow: "4px 3px 1px black" }}>
										{project.image}
									</p> */}
									</div>
									<div className="project-card-title font-bold">{project.title}</div>
								</div>
								<div className="project-card-body grow text-left py-4">{project.description}</div>
								<div className="project-card-footer flex items-center">
									<div className="project-footer-stack grow flex gap-2">
										{project.technologies.map((technology, index) => (
											<TooltipElement label={technology.name}>
												<img key={index} className="h-6" src={technology.image} alt="" />
											</TooltipElement>
										))}
									</div>
									<div className="project-footer-actions flex items-center gap-1">
										{project.source && (
											<TooltipElement label="Source">
												<a href={project.source} target="_blank" rel="noreferrer">
													<img className="h-7 hover:ring-black hover:ring-2 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/240px-GitHub_Invertocat_Logo.svg.png" alt="GitHub" />
												</a>
											</TooltipElement>
										)}
										{project.link && (
											<TooltipElement label="Preview">
												<a href={project.link} target="_blank" rel="noreferrer">
													<img className="h-7 hover:ring-black hover:ring-2 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Web_icon.png" alt="Preview" />
												</a>
											</TooltipElement>
										)}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<hr className="my-4 border-black border-2" />
			<div>
				<h2 className="font-bold text-left">Design {isSuperMode ? "Quests" : "Projects"}</h2>
				<div className="grid md:grid-cols-3 grid-cols-1 gap-4">
					{designProjects.map((project, index) => {
						return (
							<div className="project-card bg-white flex flex-col border-black border-2 dark:border-4 dark:border-r-8 dark:border-b-8 rounded-sm p-4 overflow-hidden" key={index}>
								<div className="project-card-header flex items-center gap-4">
									<div className="project-card-icon flex  rounded-sm justify-center items-center">
										{/* <img src={project.image} className="w-12 h-12" /> */}
										{project.image.length > 5 ? <img src={project.image} className="h-8" alt={project.title} /> : <p className="text-3xl dark:comic-shadow-dark">{project.image}</p>}
										{/* <p className="text-3xl " style={{ textShadow: "4px 3px 1px black" }}>
										{project.image}
									</p> */}
									</div>
									<div className="project-card-title font-bold">{project.title}</div>
								</div>
								<div className="project-card-body grow text-left py-4">{project.description}</div>
								<div className="project-card-footer flex items-center">
									<div className="project-footer-stack grow flex gap-2">
										{project.technologies.map((technology, index) => (
											<TooltipElement label={technology.name}>
												<img key={index} className="h-6" src={technology.image} alt="" />
											</TooltipElement>
										))}
									</div>
									<div className="project-footer-actions flex items-center gap-1">
										{project.source && (
											<TooltipElement label="Source">
												<a href={project.source} target="_blank" rel="noreferrer">
													<img className="h-7 hover:ring-black hover:ring-2 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/240px-GitHub_Invertocat_Logo.svg.png" alt="GitHub" />
												</a>
											</TooltipElement>
										)}
										{project.link && (
											<TooltipElement label="Preview">
												<a href={project.link} target="_blank" rel="noreferrer">
													<img className="h-7 hover:ring-black hover:ring-2 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Web_icon.png" alt="Preview" />
												</a>
											</TooltipElement>
										)}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
