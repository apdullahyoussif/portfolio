/** @format */

import Link from 'next/link';
import React from 'react';

const NavbarUI = ({ name, path }) => {
	return (
		<div className='group'>
			<Link aria-label="Path Link" 
				prefetch
				href={path}
				className='text-base select-none block text-gray-900 dark:text-gray-100  group relative w-max font-sans'>
				{name}
				<span className='absolute -bottom-1 right-0  transition-all h-0.5 bg-indigo-600 group-hover:w-full'></span>
			</Link>
		</div>
	);
};
export default NavbarUI;
