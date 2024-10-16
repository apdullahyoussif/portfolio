/** @format */
'use client';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Button from '../ui/button';
import aboutImg from '../assets/webp/about.webp';
import TitleSections from '../ui/TitleSections';
import ButtonDownload from '../ui/downloadButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About - Abdullah Youssef',
	description: 'Learn more about Abdullah Youssef, a passionate web developer.',
	openGraph: {
	  title: 'About - Abdullah Youssef',
	  description: 'Learn more about Abdullah Youssef, a passionate web developer.',
	  url: 'https://abdullah-youssef.com/about',
	  siteName: 'Abdullah Youssef Portfolio',
	  images: [
		{
		  url: 'https://abdullah-youssef.com/assets/webp/about.webp',
		  width: 1200,
		  height: 630,
		  alt: 'Abdullah Youssef Avatar',
		},
	  ],
	  type: 'website',
	},
  };
  
export default function About() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				setIsVisible(entry.isIntersecting);
			},
			{
				threshold: 0.1,
			}
		);
		if (sectionRef.current) {
			observer.observe(sectionRef?.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef?.current);
			}
		};
	}, []);

	return (
		<section
			id='about'
			ref={sectionRef}
			className='dark:bg-secondary-gradient-light  bg-gradient-dark  pb-16'>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={
					isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
				}>
				<TitleSections text='About Me' />
			</motion.div>
			<div className='container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-12'>
				<motion.div
					className='w-[350px] h-[350px] rounded-full overflow-hidden'
					initial={{ opacity: 0, scale: 0.5 }}
					animate={
						isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
					}
					transition={{ duration: 0.8 }}>
					<Image
						src={aboutImg}
						alt='Abdullah Avatar'
						width={350}
						height={350}
						className='w-full h-full object-contain'
						priority
						
					/>
				</motion.div>

				<div
					className='flex-1 text-center md:text-left'>
					
					<p className='text-lg text-gray-700 dark:text-gray-300'>
						Hi, I&apos;m Abdullah, a passionate Full Stack Developer with
						expertise in Front-End technologies like React, Next.js, and
						Tailwind CSS.
					</p>
					<p className='text-lg text-gray-700 dark:text-gray-300 mt-4'>
						With my experience in Back-End technologies like Node.js, Express,
						and databases like PostgreSQL and MongoDB, I am capable of handling
						the full development cycle of web applications.
					</p>
					<div className='mt-6 flex justify-center md:justify-start space-x-4'>
						<ButtonDownload />
						<a aria-label="Contact link"  href='https://wa.me/01069155929'>
							<Button title='Contact Me' />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
