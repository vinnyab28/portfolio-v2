import ProjectsData from "../data/ProjectsData";

const ProjectsSection = () => {
	const projects = ProjectsData;

	return (
		<section className="projects" id="projects">
			<h1>Project Gallery</h1>
			<div className="grid grid-cols-3 gap-4">
				{projects.map((project, index) => {
					return (
						<div className="project-card flex flex-col border border-black rounded p-4 overflow-hidden" key={index}>
							<div className="project-card-header flex gap-4">
								<div className="project-card-icon flex border rounded shadow-lg justify-center items-center w-12 h-12">
									{/* <img src={project.image} className="w-12 h-12" /> */}
									<p className="text-3xl " style={{ "text-shadow": "2px 2px 2px black" }}>
										{project.image}
									</p>
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
												className="h-8 hover:ring-black hover:ring-2 rounded-full"
												src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
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
