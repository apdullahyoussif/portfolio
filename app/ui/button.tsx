/** @format */

import React from 'react';

			
const Button = ({ title }: { title: string }) => {
	return (
		<div>
			<button
				type='button'
				className='py-2.5  px-6 text-sm bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700'>
				{title}
			</button>
		</div>
	);
};

export default Button;
