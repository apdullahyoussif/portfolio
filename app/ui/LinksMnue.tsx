/** @format */

import React from 'react';
import NavbarUI from './navbar';
import Link from 'next/link';
import Button from './button';
import { Links } from '../lib/AllData';
import { useAuth } from '@clerk/nextjs';

const LinksMnue = () => {
	const { isSignedIn } = useAuth();

	return (
		<div
		
		 className='bg-gray-50 dark:bg-gray-700 shadow-2xl rounded-2xl '>
			<div className='container flex-col px-4 py-4 flex items-center justify-between'>
				<div className='flex space-x-4'>
					{Links.map((link) => (
						<NavbarUI
							key={link.id}
							name={link.name}
							path={link.path}
						/>
					))}
				</div>

				{!isSignedIn && (
					<div className='flex md:hidden space-x-4 mt-2 select-none'>
						<Link aria-label="Sign Link"  prefetch href='/sign-in'>
							<Button
								title={'Login'}
							/>
						</Link>
						<Link aria-label="Sign Link"  prefetch href='/sign-up'>
							<Button
								title={'Sign up'}
							/>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default LinksMnue;
