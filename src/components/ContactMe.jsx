import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ContactMeSection = () => {
	const { isSuperMode } = useContext(GlobalContext);
	return (
		<section className="contact-me dark:text-white dark:bg-comic-violet bg-pastel-violet" id="contact">
			<div className="grid md:grid-cols-2 grid-cols-1">
				<div className="contact-me-content">
					<h1 className="md:text-left text-center dark:comic-shadow-dark">{isSuperMode ? "Send a Signal" : "Contact Me"}</h1>
					<p className="my-4 md:text-left text-center mb-10">Looking for a partner to join the quest? Send a distress signal, and let’s strategize together!</p>
					<div className="contact-me-links flex justify-center md:justify-start gap-3">
						<div className="dark:border-4 dark:border-r-8 dark:border-b-8 border-black bg-white rounded-sm h-8 w-8 dark:h-10 dark:w-10">
							<a href="https://www.linkedin.com/in/vineeth-prakash" target="_blank" rel="noreferrer">
								<img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Linkedin-logo-blue-In-square-40px.png" alt="LinkedIn" className="h-100" />
							</a>
						</div>
						<div className="dark:border-4 dark:border-r-8 dark:border-b-8 border-black p-1 bg-white rounded-sm h-8 w-8 dark:h-10 dark:w-10">
							<a href="https://www.github.com/vinnyab28" target="_blank" rel="noreferrer">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/240px-GitHub_Invertocat_Logo.svg.png"
									alt="GitHub"
									className="h-100"
								/>
							</a>
						</div>
						<div className="dark:border-4 dark:border-r-8 dark:border-b-8 border-black p-1 rounded-sm h-8 w-8 dark:h-10 dark:w-10 bg-[#0057ff]">
							<a href="https://www.behance.net/vineethgudipalli" target="_blank" rel="noreferrer">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Behance_while_icon.svg/270px-Behance_while_icon.svg.png"
									alt="Behance"
									className="h-100"
								/>
							</a>
						</div>
						<div className="dark:border-4 dark:border-r-8 dark:border-b-8 border-black bg-white rounded-sm h-8 w-8 dark:h-10 dark:w-10">
							<a href="https://www.youtube.com/vinnyscrib" target="_blank" rel="noreferrer">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/240px-YouTube_social_red_square_%282017%29.svg.png"
									alt="YouTube"
									className="h-100"
								/>
							</a>
						</div>
					</div>
				</div>
				<div className="contact-me-img"></div>
			</div>
		</section>
	);
};

export default ContactMeSection;
