import "./App.css";
import Homepage from "./pages/Homepage.tsx";

function App() {
	return (
		<div className="App">
			<Homepage />
			{/* <Header />
			<div className="grid grid-cols-2">
				<div className="wrapper p-6">
					<section>
						<Heading label="Personal Information" />
						<Input label="Name" required={true} />
						<Input label="About Me" textarea={true} />
						<hr className="my-4" />
					</section>
					<section>
						<ProfessionalExperiences />
						<hr className="my-4" />
						<Education />
						<hr className="my-4" />
						<SkillList />
					</section>
				</div>
				<div className="p-6">
					<h2 className="text-3xl font-bold text-center">Preview</h2>
					<PreviewPage />
				</div>
			</div> */}
		</div>
	);
}

export default App;
