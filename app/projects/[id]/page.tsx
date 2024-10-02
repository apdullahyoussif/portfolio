/** @format */

/** @format */
'use client';
import { useEffect, useState } from 'react';
import { projects } from '../../lib/Data';
import Image from 'next/image';
import { FoundProject } from '../../lib/definition';

export default function ProjectDetails({ params }: { params: { id: string } }) {
	const { id } = params;
	const [project, setProject] = useState<FoundProject | null>(null);
	useEffect(() => {
		const foundProject = projects.find((p) => p.id === parseInt(id)) || null;
		setProject(foundProject);
	}, [id]);

	return (
		<section className='py-16 bg-gray-100 dark:bg-gray-900'>
			<div className='container mx-auto'>
				<Image
					src={project?.image || ''}
					alt={project?.title || ''}
					width={300}
					height={300}
					className='w-full  object-cover rounded-md mb-8'
				/>
				{project && (
					<>
						<h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
							{project.title}
						</h2>
						<p className='text-lg text-gray-700 dark:text-gray-300 mb-8'>
							{project.description}
						</p>
					</>
				)}

				<h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-4'>
					Technologies Used:
				</h3>
				{project && (
					<ul className='list-disc list-inside text-gray-700 dark:text-gray-300'>
						{project.technologies.map((tech, index) => (
							<li key={index}>{tech}</li>
						))}
					</ul>
				)}
			</div>
		</section>
	);
}
