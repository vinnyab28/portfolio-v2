const Title = () => {
	return (
		<section className="profile py-16 bg-black text-white h-screen">
			<div className="h-full grid md:grid-cols-3 grid-cols-1 gap-4">
				<div className="name-wrapper text-left md:col-span-2 col-span-1 flex flex-col justify-center">
					<div className="name font-bold uppercase md:text-9xl text-6xl mx-auto md:mx-0 md:text-left text-center">
						Vineeth
						<br />
						Prakash
						<br />
						Gudipalli
					</div>
					<div className="title mx-auto md:mx-0 md:text-left text-center fold-bold md:text-3xl text-xl mt-5 tracking-widest">Full Stack Developer</div>
				</div>
				<div className="profile-picture">
					<img src="" alt="" />
				</div>
			</div>
		</section>
	);
};

export default Title;
