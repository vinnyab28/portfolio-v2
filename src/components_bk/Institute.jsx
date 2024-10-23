import Input from "./Input";

const Institute = () => {
	return (
		<>
			<Input label="Institute Name" />
			<div className="flex flex-row gap-4">
				<Input label="Degree" wrapperClassName="basis-1/2" />
				<Input label="Area of Specialization" wrapperClassName="basis-1/2" />
			</div>
			<Input label="Location" />
			<div className="flex gap-4">
				<Input label="Start Date" />
				<Input label="End Date" />
			</div>
		</>
	);
};

export default Institute;
