// import React from 'react';

import Button from '../Components/Button';

const Subscribe = () => {
	return (
		<section
			className="max-container flex justify-between items-center max-lg:flex-col gap-10"
			id="contact-us"
		>
			<h3 className="font-palanquin font-bold text-4xl lg:max-w-md leading-[68px]">
				Sign Up for <span className="text-coral-red">Updates </span>& Newsletter
			</h3>
			<div className="flex lg:max-w-[40%] w-full items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
				<input type="text" placeholder="subscribe@sneakspec.com" className="input" />
				<div className="flex max-sm:justify-end items-center max-sm:w-full">
					<Button
						label="Sign Up"
						backgroundColor="bg-coral-red"
						borderColor="border-coral-red"
						textColor="text-white"
						fullWidth
					/>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
