/** @format */
'use client';
import { services } from '../lib/AllData';
import Title from '../ui/TitleSections';

export default function Services() {
	return (
		<section
			id='services'
			className='py-16 bg-gray-100 dark:bg-gray-900'>
			<div className='container mx-auto text-center'>
				<Title text={'Our Services'} />
				<p className='text-lg text-gray-700 dark:text-gray-300 mb-12'>
					We offer a wide range of services, from AI integration to web
					development and project management.
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{services.map((service) => (
						<div
							key={service.id}
							className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300'>
							<div className='flex flex-col items-center'>
								{service.icon}
								<h3 className='text-2xl font-semibold text-gray-900 dark:text-white mt-4'>
									{service.title}
								</h3>
								<p className='text-gray-700 dark:text-gray-300 mt-2'>
									{service.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
