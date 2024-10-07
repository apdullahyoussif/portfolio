/** @format */

import Image from 'next/image';
import Button from '../ui/button';
import img from '../assets/webp/profile-4.webp';
import { FaReact } from 'react-icons/fa';
import { RiNextjsLine } from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';
import Link from 'next/link';

export default function Hero() {
	return (
		<section className='dark:bg-gradient-light bg-gradient-dark py-4'>
			<div className='container mx-auto flex flex-col  items-center justify-center py-16 space-y-6 text-center'>
				<div className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden'>
					<Image
						src={img}
						alt='Abdullah Avatar'
						width={200}
						height={200}
						priority
						className='w-full h-full object-cover'
					/>
				</div>

				<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white'>
					Hey, I&apos;m <span className='text-[#6366f1]'>Abdullah</span>
				</h1>

				<p className='text-md sm:text-lg text-gray-600 dark:text-gray-300'>
					I&apos;m a Full Stack Developer specializing in Front-End
					technologies.
				</p>
				<p className='flex items-center justify-center text-md sm:text-lg text-gray-600 dark:text-gray-300 space-x-2'>
					<span>Technologies I work with:</span>
					<RiNextjsLine className='text-black' />
					<FaReact className='text-blue-500' />
					<SiTailwindcss className='text-cyan-500' />
				</p>

				<div
					
					className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4'>
					<Link
						aria-label='blog page Link'
						prefetch
						href={'/blog'}>
						<Button title='My Blog' />
					</Link>
					<a
						aria-label='Contact Me Link'
						href='https://wa.me/01069155929'>
						<Button title='Contact Me' />
					</a>
				</div>
			</div>
		</section>
	);
}
