// import React from 'react';

import ServiceCard from '../Components/ServiceCard';
import { services } from '../constants';

const Services = () => {
	return (
		<section className="flex max-container flex-wrap justify-center gap-9">
			{services.map((service) => (
				<ServiceCard key={service.label} {...service} />
			))}
		</section>
	);
};

export default Services;
