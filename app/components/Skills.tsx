/** @format */

// pages/skills/index.tsx
'use client';
import { skills } from '../lib/AllData';
import TitleSections from '../ui/TitleSections';
import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Skills - Abdullah Youssef',
	description: 'Explore the web development skills of Abdullah Youssef.',
};

export default function Skills() {
	return (
		<section className='pb-16 bg-gray-100 dark:bg-gray-800'>
			<div className='container mx-auto text-center'>
				<TitleSections text='Skills' />
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
					{skills.map((skill) => (
						<div key={skill.id}>
							<div className='flex flex-col items-center p-6 bg-gradient-to-b from-[#60a5fa] via-[#3b82f6] to-[#1e40af] rounded-full shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer'>
								<div className='text-6xl'>{skill.icon}</div>
								<span className='mt-4 text-white text-lg font-semibold'>
									{skill.name}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
