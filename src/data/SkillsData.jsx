const SkillsData = [
	{
		categoryName: "Frontend Development",
		skills: [
			{ name: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png" },
			{ name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png" },
			{ name: "SCSS", logo: "https://sass-lang.com/assets/img/logos/logo.svg" },
			{ name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
			{ name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/TypeScript_ESLint_logo.svg/240px-TypeScript_ESLint_logo.svg.png" },
			{ name: "Angular", logo: "https://angular.io/assets/images/logos/angular/angular.svg" },
			{ name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
			{ name: "jQuery", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/320px-JQuery-Logo.svg.png" },
			{ name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png" },
			{ name: "Bootstrap", logo: "https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" },
			{
				name: "Material Design",
				logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Material_Design_Logo.svg/240px-Google_Material_Design_Logo.svg.png",
			},
			{ name: "PrimeNG", logo: "https://i0.wp.com/www.primefaces.org/wp-content/uploads/2021/10/primeng-logo.png?fit=280%2C300&ssl=1" },
			{ name: "D3.js", logo: "https://d3js.org/logo.svg" },
		],
	},
	{
		categoryName: "Backend Development",
		skills: [
			{ name: "Node.js", logo: "https://nodejs.org/static/images/logo.svg" },
			{ name: "Express", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
			{ name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
			{
				name: "Spring Boot",
				logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/240px-Spring_Boot.svg.png",
			},
			{ name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png" },
			{ name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/MySQL_Dolphin.jpg/233px-MySQL_Dolphin.jpg" },
			{
				name: "MongoDB",
				logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Mongodb-icon.svg/64px-Mongodb-icon.svg.png",
			},
		],
	},
	{
		categoryName: "Cloud and Hosting",
		skills: [
			{ name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/320px-Amazon_Web_Services_Logo.svg.png" },
			{
				name: "Heroku",
				logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Cib-heroku_%28CoreUI_Icons_v1.0.0%29.svg/32px-Cib-heroku_%28CoreUI_Icons_v1.0.0%29.svg.png",
			},
			{ name: "Docker", logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" },
			{ name: "Render", logo: "https://render.com/favicon.ico" },
		],
	},
	{
		categoryName: "Design and Prototyping",
		skills: [
			{ name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/160px-Figma-logo.svg.png" },
			{ name: "Sketch", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/266px-Sketch_Logo.svg.png" },
			{ name: "Blender", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/293px-Blender_logo_no_text.svg.png" },
		],
	},
	{
		categoryName: "Build and Task Automation",
		skills: [
			{ name: "NPM", logo: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" },
			{ name: "Webpack", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Webpack.svg/320px-Webpack.svg.png" },
			{ name: "Gulp", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gulp.js_Logo.svg/108px-Gulp.js_Logo.svg.png" },
		],
	},
	{
		categoryName: "Version Control",
		skills: [
			{
				name: "GIT",
				logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
			},
			{ name: "GitHub", logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
			{ name: "GitLab", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/320px-GitLab_logo.svg.png" },
			{
				name: "Bitbucket",
				logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bitbucket-blue-logomark-only.svg/240px-Bitbucket-blue-logomark-only.svg.png",
			},
			{ name: "SVN", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Apache_Subversion_logo.svg/278px-Apache_Subversion_logo.svg.png" },
		],
	},
	{
		categoryName: "Project Management Tools",
		skills: [
			{ name: "JIRA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/76px-Jira_Logo.svg.png" },
			{
				name: "Confluence",
				logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Atlassian_Confluence_2017_logo.svg/320px-Atlassian_Confluence_2017_logo.svg.png",
			},
		],
	},
	{
		categoryName: "Debugging and Testing",
		skills: [
			{ name: "Chrome Inspector" },
			{ name: "JUnit", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/JUnit_5_Banner.png/320px-JUnit_5_Banner.png" },
			{ name: "Mockito", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mockito_Logo.png" },
			{ name: "Postman", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png" },
		],
	},
	{
		categoryName: "Methodologies",
		skills: [{ name: "Waterfall" }, { name: "Agile" }, { name: "Scrum" }],
	},
];

export default SkillsData;
