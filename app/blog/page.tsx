/** @format */

import PostsList from './posts/PostsList';
import Link from 'next/link';

const page = () => {
	return (
		<div className='dark:bg-gradient-light bg-gradient-dark '>
			<div className='container px-4 py-8 '>
				<Link
					aria-label='Create Link'
					className='max-w-fit inline-block'
					href={'/blog/posts/insert'}>
					<p className='text-lg  px-3  rounded-2xl bg-indigo-600 font-semibold text-gray-100 mb-4 hover:underline'>
						Create a New Post
					</p>
				</Link>

				<PostsList />
			</div>
		</div>
	);
};

export default page;
