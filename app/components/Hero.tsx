/** @format */
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/button';
import img from '../assets/profile-4.png';
import { FaReact } from 'react-icons/fa';
import { RiNextjsLine } from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

export default function Hero() {
  return (
    <section className='dark:bg-gradient-light bg-gradient-dark py-4'>
      <div className='container mx-auto flex flex-col  items-center justify-center py-16 space-y-6 text-center'>
        <MotionDiv
          className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden'
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}>
          <Image
            src={img}
            alt='Abdullah Avatar'
            width={200}
            height={200}
            priority
            className='w-full h-full object-cover'
          />
        </MotionDiv>

				<motion.h1
					className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white'
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.3 }}>
					Hey, I&apos;m <span className='text-[#6366f1]'>Abdullah</span>
				</motion.h1>

				<motion.p
					className='text-md sm:text-lg text-gray-600 dark:text-gray-300'
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}>
					I&apos;m a Full Stack Developer specializing in Front-End
					technologies.
				</motion.p>

				<motion.p
					className='flex items-center justify-center text-md sm:text-lg text-gray-600 dark:text-gray-300 space-x-2'
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}>
					<span>Technologies I work with:</span>
					<RiNextjsLine className='text-black' />
					<FaReact className='text-blue-500' />
					<SiTailwindcss className='text-cyan-500' />
				</motion.p>

				<motion.div
					className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4'
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.2 }}>
					<Button title='My Blog' />
					<a href="https://wa.me/01069155929" ><Button title='Contact Me' /></a>
				</motion.div>
			</div>
		</section>
	);
}
