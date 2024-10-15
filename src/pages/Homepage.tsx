import React, { useEffect, useState } from 'react';
import UserProfile from "../types/UserData";
import SkillsData from '../data/SkillsData';
import ExperienceData from '../data/ExperienceData';
import ProfileData from '../data/ProfileData';
import EducationalData from '../data/EducationalData';
import RecommendationData from '../data/RecommendationData';
import CertificationData from '../data/CertificationData';
import ProjectsData from '../data/ProjectsData';

const Homepage = () => {
	const data: UserProfile = {
		profile: ProfileData,
		skills: SkillsData.sort((a, b) => b.skills.length - a.skills.length),
		experience: ExperienceData,
		education: EducationalData,
		projects: ProjectsData,
		recommendations: RecommendationData,
		certifications: CertificationData,
	};

	const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);
	const [bgOpacity, setBgOpacity] = useState("");
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () => {
				console.log(window.scrollY)
				if (window.scrollY > 100) {
					setBgOpacity("bg-black text-white");
				} else {
					setBgOpacity("");
				}
			})
		}
	}, []);

	return (
		<>
			<header className={`sticky top-0 transition-all ${bgOpacity}`}>
				<div className="container mx-auto py-4 flex justify-between">
					<div className="logo">VP</div>
					<nav className="flex gap-3">
						<a href="#about" type="button" className='p-2 rounded border border-gray-400 hover:border-black'>About</a>
						<a href="#skills" type="button" className='p-2 rounded border border-gray-400 hover:border-black'>Skills</a>
						<a href="#experience" type="button" className='p-2 rounded border border-gray-400 hover:border-black'>Experience</a>
						<a href="#projects" type="button" className='p-2 rounded border border-gray-400 hover:border-black'>Projects</a>
						<a href="#contact" type="button" className='p-2 rounded border border-gray-400 hover:border-black'>Contact</a>
					</nav>
				</div>
			</header>
			<div className="container mx-auto">
				<section className="profile py-16">
					<div className="grid grid-cols-3 gap-4">
						<div className="name-wrapper text-left col-span-2">
							<div className="name font-bold uppercase text-8xl ml-56">{data.profile.name}</div>
							<div className="title ml-56 fold-bold text-3xl mt-5 tracking-widest">{data.profile.title}</div>

						</div>
						<div className="profile-picture">
							<img src="" alt="" />
						</div>
					</div>
				</section>
				<section className="about-me" id="about">
					<h1 className="text-3xl font-bold py-10">About Me</h1>
					<p className="summary">{data.profile.summary}</p>
				</section>
				<section className="skills" id="skills">
					<h1 className="text-3xl font-bold py-10">Skills</h1>
					<ul className="flex flex-wrap gap-5 justify-center">
						{
							data.skills.map((category, index) => {
								return (
									<div className="flex flex-col items-center border border-black rounded-2xl px-3 py-2 shadow-lg">
										<p className="mb-2 font-bold">{category.categoryName}</p>
										<div className="flex flex-wrap gap-1">
											{
												category.skills.map(
													(skill, index) => <li key={index} className='rounded-full flex items-center bg-violet-100 pl-3 pr-4 py-1 hover:bg-violet-400 hover:font-bold hover:ring-2 hover:ring-slate-800 transition-all select-none'>{skill.logo && <img src={skill.logo} alt={skill.name} className='h-4 mr-2' />}{skill.name}</li>)
											}
										</div>
									</div>
								)
							})
						}
					</ul>
				</section>
				<section className="experience" id="experience">
					<h1 className="text-3xl font-bold py-10">Experience</h1>
					<div className="grid grid-cols-6 grid-rows-3 gap-4 w-full text-left">
						{data.experience.map((company, index) => <button className={"border border-blue-500 text-blue py-6 col-span-2 rounded transition-all " + (selectedCompanyIndex === index && "bg-blue-500 text-white active")} key={index} onClick={() => setSelectedCompanyIndex(index)}>{company.name}</button>)}
						<div className="bg-white border border-black shadow-lg rounded p-4 col-span-4 col-start-3 row-start-1 row-span-3 ">
							<div className="header bg-white flex items-center gap-4">
								<img src="" alt="" className="h-12 w-12 rounded" />
								<div className="title">
									<h2 className="text-lg font-semibold grow">{data.experience[selectedCompanyIndex].name}</h2>
									<p className="italic">{"(" + data.experience[selectedCompanyIndex].startDate + " - " + data.experience[selectedCompanyIndex].endDate + ")"}</p>
								</div>
								{/* <div className="stack grow flex gap-2">{project.technologies.split(",").map((technology, index) => <div key={index} className='border border-black rounded-full p-2'>{technology}</div>)}</div> */}
							</div>
							<div className="body h-48 overflow-y-scroll">
								<ul className="list-disc list-inside">
									{data.experience[selectedCompanyIndex].summary.map((text, index) => <li>{text}</li>)}
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className="projects" id="projects">
					<h1 className="text-3xl font-bold py-10">Projects</h1>
					<div className="grid grid-cols-3 gap-4">
						{
							data.projects.map((project, index) => {
								return (
									<div className="project-card flex flex-col border rounded p-4 overflow-hidden" key={index}>

										<div className="project-card-header flex gap-4">
											<div className="project-card-icon w-12 h-12">
												<img src={project.image} className="w-12 h-12" />
											</div>
											<div className="project-card-title font-bold">
												{project.title}
											</div>
										</div>
										<div className="project-card-body grow text-left py-4">
											{project.description}
										</div>
										<div className="project-card-footer flex items-center">
											<div className="project-footer-stack grow flex gap-2">{project.technologies.split(",").map((technology, index) => <div key={index} className='border border-black rounded-full p-2'>{technology}</div>)}</div>
											<div className="project-footer-actions flex gap-2"><div className="underline">Source</div><div className="underline">Preview</div></div>
										</div>
									</div>

								);
							})
						}
					</div>
				</section>
				<hr></hr>
				<section className="education"></section>
				<section className="recommendations"></section>
				<section className="certifications"></section>
				<section className="contact-me py-10" id="contact">
					<div className="grid grid-cols-2">
						<div className="contact-me-content">
							<p className="text-4xl font-bold text-left">Get in touch</p>
							<p className="my-4 text-left">Figma ipsum component variant main layer. Flows effect inspect scale link outline. Comment editor comment flows edit select comment undo plugin outline. Distribute star shadow mask asset frame main opacity create main. Bold draft content select edit figma variant rectangle italic ipsum.</p>
							<div className="contact-me-links flex gap-3">
								<div className="border rounded-full h-12 w-12 p-3">L</div>
								<div className="border rounded-full h-12 w-12 p-3">L</div>
								<div className="border rounded-full h-12 w-12 p-3">L</div>
								<div className="border rounded-full h-12 w-12 p-3">L</div>
							</div>
						</div>
						<div className="contact-me-img">

						</div>
					</div>
				</section>
				<footer>
					<p className="py-10">Designed by Vineeth</p>
				</footer>
			</div>
		</>
	);
};

export default Homepage;
