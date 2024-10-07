/** @format */

'use client';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import styles from '../ui/styles/Logo.module.css';

const IconsThemes = () => {
	const { theme, setTheme } = useTheme();


	return (
		<button  aria-label="theme Button" 
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className={`flex items-center justify-center h-7 w-7 rounded-full bg-gray-400 hover:bg-slate-500 ${styles.themeButton}`}>
			{theme === 'dark' ? <FaMoon /> : <FaSun />}
		</button>
	);
};

export default IconsThemes;
