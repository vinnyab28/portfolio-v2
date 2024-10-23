import "./input.css";

const Input = ({ label, placeholder, wrapperClassName, required = false, textarea = false }) => {
	return (
		<>
			<div className={`${wrapperClassName} flex flex-col items-start mb-2`}>
				<label htmlFor="myInput" className={"mb-1 font-semibold " + (required && "required")}>
					{label}
				</label>
				{textarea ? (
					<textarea
						rows={4}
						id="myInput"
						placeholder={placeholder ?? "Enter " + label}
						required={required}
						className="w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md p-2 ring-2 ring-slate-200 shadow-sm"
					></textarea>
				) : (
					<input
						type="text"
						id="myInput"
						placeholder={placeholder ?? "Enter " + label}
						required={required}
						className="w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md p-2 ring-2 ring-slate-200 shadow-sm"
					/>
				)}
			</div>
		</>
	);
};

export default Input;
