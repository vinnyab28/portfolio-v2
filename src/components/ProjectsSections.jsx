import ProjectsData from "../data/ProjectsData";

const ProjectsSection = () => {
	const projects = ProjectsData;

	return (
		<section className="projects bg-comic-yellow" id="projects">
			<h1 style={{ textShadow: "4px 3px 1px ivory" }}>My Quest Collection</h1>
			<div className="grid grid-cols-3 gap-4">
				{projects.map((project, index) => {
					return (
						<div className="project-card bg-white flex flex-col border-black border-4 border-r-8 border-b-8 rounded-sm p-4 overflow-hidden" key={index}>
							<div className="project-card-header flex items-center gap-4">
								<div className="project-card-icon flex  rounded-sm justify-center items-center">
									{/* <img src={project.image} className="w-12 h-12" /> */}
									{project.image.length > 5 ? (
										<img src={project.image} className="h-8" />
									) : (
										<p className="text-3xl " style={{ textShadow: "4px 3px 1px black" }}>
											{project.image}
										</p>
									)}
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
										<img key={index} className="h-6" src={technology} alt="" />
									))}
								</div>
								<div className="project-footer-actions flex items-center gap-1">
									{project.source && (
										<a href={project.source} target="_blank" rel="noreferrer">
											<img
												className="h-7 hover:ring-black hover:ring-2 rounded-full"
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/240px-GitHub_Invertocat_Logo.svg.png"
												alt="GitHub"
											/>
										</a>
									)}
									{project.link && (
										<a href={project.link} target="_blank" rel="noreferrer">
											<img
												className="h-7 hover:ring-black hover:ring-2 rounded-full"
												src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Web_icon.png"
												alt="Preview"
											/>
										</a>
									)}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectsSection;
