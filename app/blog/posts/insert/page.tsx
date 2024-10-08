/** @format */
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { FaQuestionCircle } from 'react-icons/fa';
import FormattingContent from '@/app/ui/FormattingContent';

function MyForm() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		id: '',
		title: '',
		description: '',
		content: '',
		date: new Date().toISOString().slice(0, 10),
	});
	const [notification, setNotification] = useState('');
	const [showInstructions, setShowInstructions] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const uuid = uuidv4();
		const encodedTitle = encodeURIComponent(formData.title);
		const encodedDescription = encodeURIComponent(formData.description);
		const encodedContent = encodeURIComponent(formData.content);
		const encodedDate = encodeURIComponent(formData.date);

		fetch(
			`/api/handlers?id=${uuid}&title=${encodedTitle}&description=${encodedDescription}&content=${encodedContent}&date=${encodedDate}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ ...formData, id: uuid }),
			}
		)
			.then(() => {
				setNotification('Post published successfully!');
				setFormData({
					id: '',
					title: '',
					description: '',
					content: '',
					date: new Date().toISOString().slice(0, 10),
				});

				setTimeout(() => {
					setNotification('');
					router.push('/blog');
				}, 2000);
			})
			.catch((error) => {
				console.log('Error:', error);
			});
	};

	return (
		<div>
			{notification && (
				<div className='bg-green-500 text-white px-4 py-1  rounded mb-4 text-right inline-block '>
					{notification}
				</div>
			)}
			<div className='container relative pt-2'>
				<button
					onClick={() => setShowInstructions(!showInstructions)}
					className='text-blue-500 mb-4 flex items-center space-x-2'>
					<FaQuestionCircle className='text-2xl' />
					<span>How to format your post?</span>
				</button>

				{showInstructions && <FormattingContent />}
			</div>

			<form
				onSubmit={handleSubmit}
				className='flex flex-col gap-4 p-4 max-w-lg mx-auto'>
				<div>
					<label
						htmlFor='title'
						className='block text-sm font-medium'>
						Title
					</label>
					<input
						type='text'
						id='title'
						name='title'
						value={formData.title}
						onChange={handleChange}
						className='w-full border border-gray-300 p-2 rounded'
						required
					/>
				</div>

				<div>
					<label
						htmlFor='description'
						className='block text-sm font-medium'>
						Description
					</label>
					<textarea
						id='description'
						name='description'
						value={formData.description}
						onChange={handleChange}
						rows={3}
						className='w-full border border-gray-300 p-2 rounded'
						required
					/>
				</div>

				<div>
					<label
						htmlFor='content'
						className='block text-sm font-medium'>
						Content
					</label>
					<textarea
						id='content'
						name='content'
						value={formData.content}
						onChange={handleChange}
						rows={5}
						className='w-full border border-gray-300 p-2 rounded'
						required
					/>
				</div>

				<div>
					<label
						htmlFor='date'
						className='block text-sm font-medium'>
						Date
					</label>
					<input
						type='date'
						id='date'
						name='date'
						value={formData.date}
						onChange={handleChange}
						className='w-full border border-gray-300 p-2 rounded'
						required
						readOnly
					/>
				</div>

				<button
					aria-label='Create Button'
					type='submit'
					className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
					Create
				</button>
			</form>
		</div>
	);
}

export default MyForm;
