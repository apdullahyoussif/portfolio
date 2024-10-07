/** @format */
'use client';
import Link from 'next/link';
import {
	FaFacebookF,
	FaLinkedinIn,
	FaGithub,
	FaTwitter,
	FaYoutube,
	FaInstagram,
	FaWhatsapp,
	FaEnvelope,
	FaPhoneAlt,
} from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className='dark:bg-gray-800 bg-gray-100 dark:text-gray-100 pt-10 pb-4'>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3'>
				<div>
					<h3 className='text-2xl font-bold mb-4'>Get in Touch</h3>
					<ul className='space-y-2'>
						<li className='flex items-center space-x-2'>
							<FaEnvelope className='text-blue-500' />
							<a aria-label="mailto link"  className='hover:text-blue-400' href='mailto:ap9allah27@gmail.com'>ap9ullah27@gmail.com</a>
						</li>
						<li className='flex items-center space-x-2'>
							<FaPhoneAlt className='text-blue-500' />
							<a aria-label="FaPhoneAlt link"  className='hover:text-blue-400' href='tel:0106915592'>0106915592</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 className='text-2xl font-bold mb-4'>Quick Links</h3>
					<ul className='space-y-2'>
						<li>
							<Link aria-label="Projects Link"  prefetch href='/projects' className='hover:text-blue-400'>
								Projects
							</Link>
						</li>
						<li>
							<Link aria-label="Blog Link"  prefetch href='/blog' className='hover:text-blue-400'>
								Blog
							</Link>
						</li>
						<li>
							<Link aria-label="v Link"  prefetch href='/#about' className='hover:text-blue-400'>
								About Me
							</Link>
						</li>
						<li>
							<Link aria-label="Contact Link"  prefetch href='/#certificates' className='hover:text-blue-400'>
								Contact
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h3 className='text-2xl font-bold mb-4'>Follow Me</h3>
					<div className='flex space-x-3'>
						<a aria-label="FaFacebookF link" 
							href='https://www.facebook.com/Abdullahyoussef222'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-blue-500 transition duration-300'>
							<FaFacebookF size={24} />
						</a>
						<a aria-label="FaLinkedinIn link" 
							href='https://www.linkedin.com/in/abdullah-mohammed-youssef'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-blue-400 transition duration-300'>
							<FaLinkedinIn size={24} />
						</a>
						<a aria-label="FaGithub link" 
							href='https://github.com/apdullahyoussif'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-white transition duration-300'>
							<FaGithub size={24} />
						</a>
						<a aria-label="FaTwitter link" 
							href='https://www.threads.net/@ap9ullah'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-blue-300 transition duration-300'>
							<FaTwitter size={24} />
						</a>
						<a aria-label="FaYoutube link" 
							href='https://www.youtube.com/@YOULYCODE'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-red-600 transition duration-300'>
							<FaYoutube size={24} />
						</a>
						<a aria-label="FaInstagram Link" 
							href='https://www.instagram.com/ap9ullah'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-pink-500 transition duration-300'>
							<FaInstagram size={24} />
						</a>
						<a aria-label="FaWhatsapp Link" 
							href='https://wa.me/01069155929' 
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-green-500 transition duration-300'>
							<FaWhatsapp size={24} />
						</a>
					</div>
				</div>
			</div>

			<div className='mt-8 border-t border-gray-800 dark:border-gray-200 pt-4 flex items-center justify-center'>
				<p>&copy; {new Date().getFullYear()} <Link aria-label="reserved Link"  prefetch href='/' className='text-blue-500  underline'>Abdullah Youssef.</Link> All rights reserved.</p>
			</div>
		</footer>
	);
}
