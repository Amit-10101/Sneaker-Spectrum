// import React from 'react';

const Button = ({ label, iconURL }) => {
	return (
		<button className="bg-coral-red rounded-full text-white border border-coral-red text-lg leading-none px-7 py-4 font-montserrat flex justify-center items-center gap-2">
			{/* <div>ab</div> */}
			{label}
			<img src={iconURL} alt="Button Image" className="ml-2 rounded-full w-5 h-5" />
		</button>
	);
};

export default Button;
