/** @format */

'use client';
import Image from 'next/image';
import { projects } from '../lib/AllData';
import Title from '../ui/TitleSections';

export default function Projects() {
	return (
		<section className='py-8 bg-gray-100 dark:bg-gray-900'>
			<div className='container mx-auto text-center'>
				<Title text={'Projects'} />
				<p className='text-lg text-gray-700 dark:text-gray-300 mb-12'>
					Here are some of my most recent projects, built with modern web
					technologies.
				</p>

				<div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{projects.map((project) => (
						<div
							key={project.id}
							className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col '>
							<Image
								src={project.image}
								alt={project.title}
								width={300}
								height={300}
								
								loading="lazy"
								className='w-full h-40 object-cover rounded-md mb-4'
							/>
							<h3 className='text-2xl font-semibold text-gray-900 dark:text-white'>
								{project.title}
							</h3>
							<p className='text-gray-700 dark:text-gray-300 my-4'>
								{project.description}
							</p>

							<a aria-label="Demo Link"  className='mt-auto block' href={project?.path}>
								<p className='text-blue-500 hover:underline'>Demo</p>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
