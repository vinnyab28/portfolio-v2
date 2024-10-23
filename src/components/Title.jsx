const Title = () => {
	return (
		<section className="profile py-16 bg-black text-white h-screen">
			<div className="h-full grid grid-cols-3 gap-4">
				<div className="name-wrapper text-left col-span-2 flex flex-col justify-center">
					<div className="name font-bold uppercase text-8xl ml-56">Vineeth Prakash Gudipalli</div>
					<div className="title ml-56 fold-bold text-3xl mt-5 tracking-widest">Full Stack Developer</div>
				</div>
				<div className="profile-picture">
					<img src="" alt="" />
				</div>
			</div>
		</section>
	);
};

export default Title;
