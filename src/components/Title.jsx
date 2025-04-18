import profilePic from "../assets/images/profile-pic.png";

const Title = () => {
	return (
		<section className="profile bg-black text-white border-b-2 border-b-white">
			<div className="h-full grid md:grid-cols-2 grid-cols-1 gap-4">
				<div className="name-wrapper h-full text-left col-span-1 flex flex-col justify-center">
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
					<img src={profilePic} alt="Profile Pic" className="w-fit" />
				</div>
			</div>
		</section>
	);
};

export default Title;
