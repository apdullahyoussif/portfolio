/** @format */
'use client';
import { motion } from 'framer-motion';

const Loading = () => {
	return (
		<div className='flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800'>
			<div className='flex space-x-4'>
				{[...Array(3)].map((_, index) => (
					<motion.div
						key={index}
						className='w-12 h-12 bg-blue-500 rounded-full'
						initial={{ scale: 0.5, opacity: 0.5 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{
							duration: 0.6,
							ease: 'easeInOut',
							repeat: Infinity,
							delay: index * 0.2, 
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Loading;
