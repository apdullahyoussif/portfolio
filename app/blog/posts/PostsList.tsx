/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import PostCard from '../posts/PostsCard';
import { getPosts } from '../../lib/data.ts';
import { Post } from '@/app/lib/definition';
import { QueryResultRow } from '@vercel/postgres';
import Loading from '../../loading';
import TitleSections from '../../ui/TitleSections';

const PostsList = () => {
	const [posts, setPosts] = useState<Post[] | QueryResultRow | undefined>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const postsData = await getPosts();
				setPosts(postsData);
			} catch (error) {
				console.error('Error fetching posts:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<div>
			<TitleSections text={'Blog'} />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 '>
				{posts?.map((post: Post) => (
					<PostCard
						key={post?.id}
						post={post}
					/>
				))}
			</div>
		</div>
	);
};

export default PostsList;
