
import PostsList from './posts/PostsList';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'blog - Abdullah Youssef',
	description: 'Exploring blog Abdullah Youssef, a passionate web developer.',
};

const page = () => {
	return (
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
	);
};

export default page;
