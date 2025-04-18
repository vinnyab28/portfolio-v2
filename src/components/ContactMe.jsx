import { useContext } from "react";
import TooltipElement from "../components/TooltipElement";
import { GlobalContext } from "../context/GlobalContext";

const ContactMeSection = () => {
	const baseClassName =
		"inline-block h-8 w-8 dark:h-10 dark:w-10 font-bold rounded-lg dark:rounded-none border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] text-xl transition-all";
	const { isSuperMode } = useContext(GlobalContext);
	return (
		<section className="contact-me dark:text-white dark:bg-comic-violet bg-pastel-violet" id="contact">
			<div className="grid md:grid-cols-2 grid-cols-1">
				<div className="contact-me-content">
					<h1 className="md:text-left text-center dark:comic-shadow-dark">{isSuperMode ? "Send a Signal" : "Contact Me"}</h1>
					<p className="my-4 md:text-left text-center mb-10">Looking for a partner to join the quest? Send a distress signal, and let’s strategize together!</p>
					<div className="contact-me-links flex justify-center md:justify-start gap-3">
						<TooltipElement label="LinkedIn">
							<a href="https://www.linkedin.com/in/vineeth-prakash" target="_blank" rel="noreferrer" className={`${baseClassName} bg-white`}>
								<img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Linkedin-logo-blue-In-square-40px.png" alt="LinkedIn" className="h-full" />
							</a>
						</TooltipElement>
						<TooltipElement label="Github">
							<a href="https://www.github.com/vinnyab28" target="_blank" rel="noreferrer" className={`${baseClassName} bg-white`}>
								<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/240px-GitHub_Invertocat_Logo.svg.png" alt="GitHub" className="h-full" />
							</a>
						</TooltipElement>
						<TooltipElement label="Behance">
							<a href="https://www.behance.net/vineethgudipalli" target="_blank" rel="noreferrer" className={`${baseClassName} p-1 bg-[#0057ff]`}>
								<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Behance_while_icon.svg/270px-Behance_while_icon.svg.png" alt="Behance" className="h-full" />
							</a>
						</TooltipElement>
						<TooltipElement label="YouTube">
							<a href="https://www.youtube.com/vinnyscrib" target="_blank" rel="noreferrer" className={`${baseClassName}`}>
								<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/240px-YouTube_social_red_square_%282017%29.svg.png" alt="YouTube" className="h-full" />
							</a>
						</TooltipElement>
					</div>
				</div>
				<div className="contact-me-img"></div>
			</div>
		</section>
	);
};

export default ContactMeSection;
