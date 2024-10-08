/** @format */
'use client';
import Link from 'next/link';
import { Links } from '../lib/AllData';
import NavbarUI from '../ui/navbar';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from '../ui/styles/Logo.module.css';
import Button from '../ui/button';
import { useState } from 'react';
import { useAuth, UserButton } from '@clerk/nextjs';
import LinksMnue from '../ui/LinksMnue';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const IconsThemes = dynamic(() => import('../ui/IconsThemes'), {
	ssr: false,
});
export default function Navbar() {
	const [open, setOpen] = useState(false);
	const { isSignedIn } = useAuth();
	const menuVariants = {
		open: {
			opacity: 1,
			height: 'auto',
			visibility: 'visible',
			transition: { type: 'spring', stiffness: 50 },
		},
		closed: {
			opacity: 0,
			height: 0,
			visibility: 'hidden',
			transition: { type: 'spring', stiffness: 50 },
		},
	};

	return (
		<nav className='bg-white shadow-lg dark:bg-gray-800 dark:text-gray-200 relative'>
			<div className='container mx-auto flex items-center justify-between py-4'>
				<div className={styles.logoContainer}>
					<Link
						aria-label='LOGO Link'
						prefetch
						href='/'
						className={styles.logoLink}>
						<p className={`${styles.logoText} text-[20px] md:text-3xl`}>
							&lt; Abdullah /&gt;
						</p>
					</Link>
				</div>

				<div className='flex items-center gap-2 justify-center'>
					<IconsThemes />
					<Link
						aria-label='Blog Link'
						prefetch
						href={'/blog'}>
						<Button title={'My Blog'} />
					</Link>
				</div>

				<div className='hidden md:flex space-x-4'>
					{Links.map((link) => (
						<NavbarUI
							key={link.id}
							name={link.name}
							path={link.path}
						/>
					))}
				</div>

				{isSignedIn ? (
					<UserButton />
				) : (
					<div className='md:flex hidden items-center gap-2'>
						<Link
							aria-label='sign-in Link'
							prefetch
							href='/sign-in'>
							<Button title={'Login'} />
						</Link>
						<Link
							aria-label='sign-up Link'
							prefetch
							href='/sign-up'>
							<Button title={'Sign up'} />
						</Link>
					</div>
				)}

				<div className='md:hidden transition '>
					<div
						onClick={() => setOpen(!open)}
						className='cursor-pointer'>
						{open ? (
							<FaTimes className='h-6 w-6 font-normal text-gray-800 dark:text-gray-200' />
						) : (
							<FaBars className='h-6 w-6 text-gray-800 dark:text-gray-200' />
						)}
					</div>

					<motion.div
						className={`min-w-[350px] absolute top-[70px] left-1/2 -translate-x-1/2 z-10 p-2 ${
							open ? 'block' : 'hidden'
						}`}
						initial={false}
						animate={open ? 'open' : 'closed'}
						variants={menuVariants}>
						<LinksMnue />
					</motion.div>
				</div>
			</div>
		</nav>
	);
}
