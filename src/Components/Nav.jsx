// import React from 'react';
// import { headerLogo } from '../assets/images';
import { headerLogo } from '../assets/images/';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
	return (
		<header className="padding-x py-8 absolute z-10 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img src={headerLogo} alt="Sneaker Spectrum Logo" height={40} width={225} />
					{/* <img src={headerLogo} alt="Nike Logo" height={29} width={130} /> */}
				</a>
				<ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="font-montserrat leading-normal text-lg text-slate-gray"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className="hidden max-xl:block">
					<img src={hamburger} alt="Hamburger Menu Icon" height={25} width={25} />
				</div>
			</nav>
		</header>
	);
};

export default Nav;
