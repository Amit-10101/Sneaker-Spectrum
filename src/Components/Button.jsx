// import React from 'react';

const Button = ({ label, iconURL, backgroundColor, borderColor, textColor }) => {
	return (
		<button
			className={`${backgroundColor} rounded-full ${textColor} border ${borderColor} text-lg leading-none px-7 py-4 font-montserrat flex justify-center items-center gap-2`}
		>
			{/* <div>ab</div> */}
			{label}
			{iconURL && (
				<img src={iconURL} alt="Button Image" className="ml-2 rounded-full w-5 h-5" />
			)}
		</button>
	);
};

export default Button;
