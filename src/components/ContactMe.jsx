const ContactMeSection = () => {
	// const links = [
	// 	{
	// 		logo: "path/to/linkedin_logo.png",
	// 		url: "https://www.linkedin.com/in/vineeth-prakash",
	// 		title: "LinkedIn",
	// 	},
	// 	{
	// 		logo: "path/to/github_logo.png",
	// 		url: "https://github.com/vinnyab28",
	// 		title: "GitHub",
	// 	},
	// ]

	return (
		<section className="contact-me" id="contact">
			<div className="grid grid-cols-2">
				<div className="contact-me-content">
					<p className="text-4xl font-bold text-left">Get in Touch</p>
					<p className="my-4 text-left mb-10">Got something to share? I’m all ears! Reach out, and let’s start a conversation.</p>
					<div className="contact-me-links flex gap-3">
						<div className="border h-8 w-8">
							<a href="https://www.linkedin.com/in/vineeth-prakash" target="_blank" rel="noreferrer">
								<img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Linkedin-logo-blue-In-square-40px.png" alt="LinkedIn" />
							</a>
						</div>
						{/* <div className="border rounded-full h-12 w-12 p-3">L</div>
								<div className="border rounded-full h-12 w-12 p-3">L</div>
								<div className="border rounded-full h-12 w-12 p-3">L</div> */}
					</div>
				</div>
				<div className="contact-me-img"></div>
			</div>
		</section>
	);
};

export default ContactMeSection;
