const Header = () => {
	return (
		<header>
			<div className="flex p-2 px-5 items-center border">
				<h1 className="text-4xl flex-auto text-left font-bold uppercase">Resume Builder</h1>
				<div className="flex-initial">
					<button type="button" className="p-2 rounded-md transition-colors text-slate-600 border border-slate-500 hover:text-slate-950 hover:border-slate-950">
						Toggle Theme
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
