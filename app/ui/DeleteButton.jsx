/** @format */

'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const DeleteButton = ({ postId }) => {
	const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
	const router = useRouter();

	const handleDelete = () => {
		setShowDeleteConfirmation(true); 
	};

	const confirmDelete = async () => {
		if (postId) {
			try {
				const response = await fetch(`/api/handlers?id=${postId}`, {
					method: 'DELETE',
				});
				if (response.ok) {
					router.push('/blog');
				}
				if (!response.ok) {
					throw new Error('Failed to delete post');
				}
			} catch (error) {
				console.error('Error deleting post:', error);
			}
		}
		setShowDeleteConfirmation(false); 
	};

	const cancelDelete = () => {
		setShowDeleteConfirmation(false); 
	};

	return (
		<div className='flex justify-end items-end'>
			<button  aria-label="FaTrash Button" 
				onClick={handleDelete}
				className='inline-block p-3 h-12  text-red-700 hover:text-red-500 '
				title='Delete Post'>
				<FaTrash />
			</button>
			{showDeleteConfirmation && (
				<div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50'>
					<div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg z-50'>
						<p className='mb-4 text-gray-700 dark:text-gray-300'>
							Are you sure you want to delete this post?
						</p>
						<div className='flex justify-end gap-4'>
							<button  aria-label="Yes Button" 
								onClick={confirmDelete}
								className='bg-red-500 h-12  text-white px-4 py-2 rounded hover:bg-red-600'>
								Yes
							</button>
							<button  aria-label="No Button" 
								onClick={cancelDelete}
								className='bg-indigo-500 h-12  px-4 py-2 rounded hover:bg-indigo-700 text-white'>
								No
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DeleteButton;
