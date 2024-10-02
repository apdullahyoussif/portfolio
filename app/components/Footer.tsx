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
		<footer className='dark:bg-gray-800 bg-gray-100 dark:text-gray-100 py-10'>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3'>
				<div>
					<h3 className='text-2xl font-bold mb-4'>Get in Touch</h3>
					<ul className='space-y-2'>
						<li className='flex items-center space-x-2'>
							<FaEnvelope className='text-blue-500' />
							<a className='hover:text-blue-400' href='mailto:ap9allah27@gmail.com'>ap9ullah27@gmail.com</a>
						</li>
						<li className='flex items-center space-x-2'>
							<FaPhoneAlt className='text-blue-500' />
							<a className='hover:text-blue-400' href='tel:0106915592'>0106915592</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 className='text-2xl font-bold mb-4'>Quick Links</h3>
					<ul className='space-y-2'>
						<li>
							<a href='#about' className='hover:text-blue-400'>
								About Me
							</a>
						</li>
						<li>
							<Link href='/projects' className='hover:text-blue-400'>
								Projects
							</Link>
						</li>
						<li>
							<a href='#blog' className='hover:text-blue-400'>
								Blog
							</a>
						</li>
						<li>
							<a href='#contact' className='hover:text-blue-400'>
								Contact
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 className='text-2xl font-bold mb-4'>Follow Me</h3>
					<div className='flex space-x-3'>
						<a
							href='https://www.facebook.com/Abdullahyoussef222'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-blue-500 transition duration-300'>
							<FaFacebookF size={24} />
						</a>
						<a
							href='https://www.linkedin.com/in/abdullah-mohammed-youssef'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-blue-400 transition duration-300'>
							<FaLinkedinIn size={24} />
						</a>
						<a
							href='https://github.com/apdullahyoussif'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-white transition duration-300'>
							<FaGithub size={24} />
						</a>
						<a
							href='https://www.threads.net/@ap9ullah'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-blue-300 transition duration-300'>
							<FaTwitter size={24} />
						</a>
						<a
							href='https://www.youtube.com/@YOULYCODE'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-red-600 transition duration-300'>
							<FaYoutube size={24} />
						</a>
						<a
							href='https://www.instagram.com/ap9ullah'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-pink-500 transition duration-300'>
							<FaInstagram size={24} />
						</a>
						<a
							href='https://wa.me/01069155929' 
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-green-500 transition duration-300'>
							<FaWhatsapp size={24} />
						</a>
					</div>
				</div>
			</div>

			<div className='mt-8 text-center border-t border-gray-800 pt-4'>
				<p>&copy; {new Date().getFullYear()} <Link href='/' className='text-blue-500  underline mb-2'>Abdullah Youssef.</Link> All rights reserved.</p>
			</div>
		</footer>
	);
}
