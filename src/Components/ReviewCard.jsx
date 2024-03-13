// import React from 'react';

import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<img
				src={imgURL}
				alt={customerName}
				className="object-contain rounded-full w-[120px] h-[120px]"
			/>
			<p className="mt-6 max-w-sm info-text text-center">{feedback}</p>
			<div className="flex mt-3 justify-center items-center gap-2.5">
				<img
					src={star}
					alt="Rating Star Icon"
					width={24}
					height={24}
					className="object-contain m-0"
				/>
				<p className="font-montserrat text-xl text-slate-gray">({rating})</p>
			</div>
			<h3 className="font-palanquin font-bold mt-1 text-3xl text-center">{customerName}</h3>
		</div>
	);
};

export default ReviewCard;
