import Input from "./Input";

const Company = () => {
	return (
		<>
			<Input label="Company Name" />
			<Input label="Role" />
			<Input label="Location" />
			<div className="flex gap-4">
				<Input label="Start Date" />
				<Input label="End Date" />
			</div>
		</>
	);
};

export default Company;
