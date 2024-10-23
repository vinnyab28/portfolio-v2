import { useState } from "react";
import Input from "./Input";

const SkillList = () => {
	const [listOfSkills, setListOfSkills] = useState([]);
	function onAddSkill(newSkill) {
		setListOfSkills((prevSkills) => [...prevSkills, newSkill]);
	}
	return (
		<>
			<Input label="Skill(s)" />
			{listOfSkills.map((skill, index) => {
				<span key={index} className="">
					{skill}
				</span>;
			})}
		</>
	);
};

export default SkillList;
