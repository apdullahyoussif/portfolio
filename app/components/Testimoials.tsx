/** @format */
'use client';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Title from '../ui/TitleSections';
import { testimonials } from '../lib/AllData';

export default function Testimonials() {
	return (
		<section className='py-16 bg-gray-100 dark:bg-gray-900'>
			<div className='container mx-auto text-center'>
				<Title text='Testimonials' />
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className='relative flex flex-col items-center p-6 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white rounded-lg shadow-lg transform transition-all duration-300'>
							<div className='absolute top-0 left-0 p-2'>
								<FaQuoteLeft size={20} />
							</div>
							<div className='absolute bottom-0 right-0 p-2'>
								<FaQuoteRight size={20} />
							</div>
							<p className='text-lg italic mb-4'>{testimonial.comment}</p>
							<h3 className='text-xl font-bold'>{testimonial.name}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
