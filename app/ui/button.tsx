/** @format */

import React from 'react';

			
const Button = ({ title, ...props }: { title: string }) => {
	return (
	  <button  aria-label="Title Button" 
		{...props}
		type="button"
		className="py-2.5 px-6  h-12  text-sm bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
	  >
		{title}
	  </button>
	);
  };
  

export default Button;
