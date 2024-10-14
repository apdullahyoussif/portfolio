/** @format */

'use client';

import React, { useEffect, useState } from 'react';
import { getPosts } from '../../../lib/data.ts';
import Image from 'next/image';
import { useUser } from '@clerk/nextjs';
import DeleteButton from '../../../ui/DeleteButton.jsx';
import { Post } from '@/app/lib/definition.jsx';
import { QueryResultRow } from '@vercel/postgres';
import Loading from '../../../loading';
import { useRouter } from 'next/navigation.js';
import CopyButton from '../../../ui/CopyButton';
import Head from 'next/head';
const PostDetails = ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const router = useRouter();

	const [posts, setPosts] = useState<Post[] | QueryResultRow | undefined>([]);
	const [loading, setLoading] = useState(true);
	const { user } = useUser();

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

	const post = posts?.find((p: { id: string }) => p.id === id);

	if (!post) {
		return router.push('/blog');
	}
	const fullName = user?.fullName || post?.author;

	const isPostOwner =
		fullName.trim().toLowerCase() === post?.author.trim().toLowerCase();
	const parseContent = (content: string) => {
		const lines = content.split('\n');
		const result: JSX.Element[] = [];
		let codeBlock = '';
		let inCodeBlock = false;

		lines.forEach((line, index) => {
			line = line.trim();

			if (line.startsWith('#')) {
				if (codeBlock) {
					result.push(
						<div
							key={index}
							className='bg-gray-800 text-white p-2 rounded mb-4 relative'>
							<pre className='whitespace-pre-wrap'>{codeBlock.trim()}</pre>
							<CopyButton code={codeBlock.trim()} />
						</div>
					);
					codeBlock = '';
					inCodeBlock = false;
				}

				result.push(
					<h2
						key={index}
						className='text-2xl font-bold mb-4'>
						{line.replace('#', '').trim()}
					</h2>
				);
			} else if (line.startsWith('>')) {
				if (codeBlock) {
					result.push(
						<div
							key={index}
							className='bg-gray-800 text-white p-2 rounded mb-4 relative'>
							<pre className='whitespace-pre-wrap'>{codeBlock.trim()}</pre>
							<CopyButton code={codeBlock.trim()} />
						</div>
					);
					codeBlock = '';
					inCodeBlock = false;
				}

				result.push(
					<blockquote
						key={index}
						className='border-l-4 border-sky-500 bg-gray-500 text-white pl-2 italic mb-4'>
						{line.replace('>', '').trim()}
					</blockquote>
				);
			} else if (line.startsWith('`')) {
				if (inCodeBlock) {
					result.push(
						<div
							key={index}
							className='bg-gray-800 text-white p-2 rounded mb-4 relative'>
							<pre className='whitespace-pre-wrap'>{codeBlock.trim()}</pre>
							<CopyButton code={codeBlock.trim()} />
						</div>
					);
					codeBlock = '';
					inCodeBlock = false;
				} else {
					inCodeBlock = true;
					codeBlock += line.replace(/`/g, '').trim() + '\n';
				}
			} else if (inCodeBlock) {
				codeBlock += line + '\n';
			} else {
				result.push(
					<p
						key={index}
						className='mb-4 pl-4 whitespace-pre-wrap'>
						{line}
					</p>
				);
			}
		});

		if (codeBlock) {
			result.push(
				<div className='bg-gray-800 text-white p-2 rounded mb-4 relative'>
					<pre className='whitespace-pre-wrap'>{codeBlock.trim()}</pre>
					<CopyButton code={codeBlock.trim()} />
				</div>
			);
		}

		return result;
	};

	return (
		<>
			<Head>
				<title>{post?.title} - Abdullah Youssef</title>
				<meta
					name='description'
					content={post?.description}
				/>
			</Head>
			<div className='bg-gradient-dark dark:bg-gradient-light pt-8'>
				<div className='max-w-2xl mx-auto p-4 rounded-3xl container bg-white dark:bg-gray-900 min-h-screen relative'>
					<div className='flex items-center justify-between mb-4'>
						<div className='flex items-center'>
							<div className='w-[32px] h-[32px] overflow-hidden rounded-full mr-5'>
								<Image
									src={post?.authorimage}
									alt={post?.author}
									width={50}
									height={50}
									priority
									className='w-full rounded-full'
								/>
							</div>
							<p className='text-gray-700 dark:text-gray-300'>{post?.author}</p>
						</div>
						<div>
							<span className='text-gray-500 dark:text-gray-400'>
								{post?.date}
							</span>
						</div>
					</div>
					<div className='border-b-2 border-spacing-0 mb-4'>
						<h3 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text tracking-wider'>
							{post?.title}
						</h3>
					</div>
					<p className='text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-2xl font-bold text-center'>
						{post?.description}
					</p>
					<div className='wrap'>{parseContent(post?.content)}</div>{' '}
					{isPostOwner && <DeleteButton postId={post.id} />}
				</div>
			</div>
		</>
	);
};

export default PostDetails;
