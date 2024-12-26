import React from 'react';
import AboutMe from '../components/AboutMe';
import ContactMeSection from '../components/ContactMe';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProfessionalExperience from '../components/ProfessionalExperience';
import ProjectsSection from '../components/ProjectsSections';
import Skills from '../components/Skills';
import Title from '../components/Title';

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
				{/* <ThemeButton /> */}
			</div>
		</>
	);
};

export default Homepage;
