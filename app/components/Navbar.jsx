/** @format */

'use client';
import Link from 'next/link';
import { Links } from '../lib/Data';
import NavbarUI from '../ui/navbar';
import { useTheme } from 'next-themes';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import styles from '../ui/styles/Logo.module.css';
import Button from '../ui/button';
import { useEffect, useState } from 'react';
import {  useAuth, UserButton } from '@clerk/nextjs';
import LinlsMnue from '../ui/linlsMnue';
export default function Navbar() {
	const { theme, setTheme } = useTheme();
	const [open, setOpen] = useState(); 
	const [mounted, setMounted] = useState(false);
    const { isSignedIn } = useAuth(); 

	useEffect(() => setOpen(false), []);
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<nav className='bg-white shadow-lg dark:bg-gray-800 dark:text-gray-200 relative'>
			<div className='container mx-auto flex items-center justify-between py-4'>
				<div className={styles.logoContainer}>
					<Link
						href='/'
						className={styles.logoLink}>
						<p className={styles.logoText}> &lt; Abdullah / &gt;</p>
					</Link>
				</div>
				<div className='flex items-center gap-2 justify-center'>
					<button
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						className={`flex items-center justify-center h-7 w-7 rounded-full bg-gray-400 hover:bg-slate-500 ${styles.themeButton}`}>
						{theme === 'dark' ? <FaMoon /> : <FaSun />}
					</button>
					<Button title={'My Blog'} />
				</div>

				<div className='hidden lg:flex space-x-2'>
					{Links.map((link) => (
						<NavbarUI
							key={link.id}
							name={link.name}
							path={link.path}
						/>
					))}
				</div>

				{isSignedIn ? (
					<UserButton 
					
				/>				) : (
					<div className='md:flex hidden items-center gap-2'>
						<Link href='/sign-in'>
							<Button title={'Login'} />
						</Link>
						<Link href='/sign-up'>
							<Button title={'Sign up'} />
						</Link>
					</div>
				)}
				<div className='lg:hidden transition'>
					<div
						onClick={() => setOpen(!open)}
						className='cursor-pointer'>
						<FaBars className='h-6 w-6 text-gray-800 dark:text-gray-200' />
					</div>
					<div className='absolute top-[75px] left-10 z-10 p-2'>
						{open && <LinlsMnue />}
					</div>
				</div>
			</div>
		</nav>
	);
}
