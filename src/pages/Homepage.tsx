import React, { } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import ProfessionalExperience from '../components/ProfessionalExperience';
import ProjectsSection from '../components/ProjectsSections';
import ContactMeSection from '../components/ContactMe';

const Homepage = () => {

	return (
		<>
			<Header />
			<div className="container-fluid mx-auto">
				<Title />
				<AboutMe />
				<Skills />
				<ProfessionalExperience />
				<ProjectsSection />
				{/* <section className="education"></section>
				<section className="recommendations"></section>
				<section className="certifications"></section> */}
				<ContactMeSection />
				<Footer />
			</div>
		</>
	);
};

export default Homepage;
