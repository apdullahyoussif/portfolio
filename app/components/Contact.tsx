/** @format */
'use client';
import { useState } from 'react';
import Title from '../ui/TitleSections';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
	};

	return (
		<section
			id='contact'
			className='py-16 bg-gray-100 dark:bg-gray-900'>
			<div className='container mx-auto text-center'>
				<Title text={'Contact Me'} />
				<p className='text-lg text-gray-700 dark:text-gray-300 mb-8'>
					Feel free to reach out to me for any inquiries or collaborations.
				</p>
				<form
					onSubmit={handleSubmit}
					className='max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
					<div className='mb-4'>
						<input
							type='text'
							name='name'
							placeholder='Your Name'
							value={formData.name}
							onChange={handleChange}
							className='w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
							required
						/>
					</div>
					<div className='mb-4'>
						<input
							type='email'
							name='email'
							placeholder='Your Email'
							value={formData.email}
							onChange={handleChange}
							className='w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
							required
						/>
					</div>
					<div className='mb-4'>
						<textarea
							name='message'
							placeholder='Your Message'
							value={formData.message}
							onChange={handleChange}
							className='w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
							rows={5}
							required></textarea>
					</div>
					<button  aria-label="Send Button" 
						type='submit'
						className='w-full h-12  bg-blue-500 text-white py-4 rounded-lg hover:bg-blue-600 transition duration-300'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}
