import { useState } from "react";
import Button from "./Button";
import Heading from "./Heading";
import Input from "./Input";
import Company from "./Company";

const ProfessionalExperiences = () => {
	const [companies, setCompanies] = useState([]);

	function handleAdd() {
		const newCompany = { id: Date.now() };
		setCompanies((prevCompanies) => [...prevCompanies, newCompany]);
	}

	return (
		<>
			<Heading label="Professional Experience" />
			{!companies.length && <p className="text-left">Add Professional Experiences</p>}
			{companies.map((company, index) => (
				<div className="mb-6">
					<h2 className="text-left font-bold text-xl">Company #{index + 1}</h2>
					<Company key={company.id} />
				</div>
			))}
			<Button label="Add" onClick={handleAdd} className="flex justify-start mt-3" />
		</>
	);
};

export default ProfessionalExperiences;
