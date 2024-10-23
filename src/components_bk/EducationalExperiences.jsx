import { useState } from "react";
import Heading from "./Heading";
import Button from "./Button";
import Institute from "./Institute";

const Education = () => {
	const [institutes, setInstitutes] = useState([]);

	function handleAdd() {
		const newInstitute = { id: Date.now() };
		setInstitutes((prevInstitutes) => [...prevInstitutes, newInstitute]);
	}
	return (
		<>
			<Heading label="Education" />
			{!institutes.length && <p className="text-left">Add Education</p>}
			{institutes.map((institute, index) => (
				<div className="mb-6">
					<div className="">
						<h2 className="text-left font-bold text-xl">Institute #{index + 1}</h2>
					</div>
					<Institute key={institute.id} />
				</div>
			))}
			<Button label="Add" onClick={handleAdd} className="flex justify-start mt-3" />
		</>
	);
};

export default Education;
