const Button = ({ label, type = "button", onClick, className }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${className} p-2 transition-colors rounded-md px-5 bg-slate-700 ring-1 ring-slate-700 text-white hover:bg-slate-950 hover:ring-slate-950`}
		>
			{label}
		</button>
	);
};

export default Button;
