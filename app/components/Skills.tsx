/** @format */
'use client';
import { motion } from 'framer-motion';

import { skills } from '../lib/Data';
import Title from '../ui/titleSections';

export default function Skills() {
	return (
		<section className='pb-16 bg-gray-100 dark:bg-gray-800'>
			<div className='container mx-auto text-center'>
				<Title text='Skillss' />
				<div className='grid grid-cols-1  md:grid-cols-4 gap-8'>
					{skills.map((skill) => (
						<motion.div
							key={skill.id}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 1 }}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className='flex flex-col items-center p-6 bg-gradient-to-b from-[#60a5fa] via-[#3b82f6] to-[#1e40af] rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer'>
							<motion.div className='text-6xl'>
								{skill.icon}
							</motion.div>
							<span className='mt-4 text-white text-lg font-semibold'>
								{skill.name}
							</span>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
