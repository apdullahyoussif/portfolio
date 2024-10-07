/** @format */
import React from 'react';

const TitleSections = ({text}) => {
const  title = text
	return <div className='relative min-w-[300px] text-center mx-auto py-10 '>
    <p className='text-[50px] md:text-[70px] font-bold tracking-widest opacity-10 text-indigo-600 ' >{title}</p>
    <h2 className='text-[35px] md:text-[40px] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-wide text-indigo-700 dark:text-[##1d4ed8]'>{title}</h2>
  </div>;
};

export default TitleSections;
