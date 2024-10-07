/** @format */
import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaNodeJs,
	FaDatabase,
} from 'react-icons/fa';
import {
	SiTypescript,
	SiRedux,
	SiNextdotjs,
	SiTailwindcss,
	SiMongodb,
	SiPostgresql,
	SiExpress,
} from 'react-icons/si';
import { FaRobot, FaCode, FaProjectDiagram, FaCogs } from 'react-icons/fa';
import image from '../assets/webp/advJS.webp';
import image1 from '../assets/webp/advReact.webp';
import image2 from '../assets/webp/asyncJS.webp';
import image3 from '../assets/webp/basicsJS.webp';
import image4 from '../assets/webp/basiscgit.webp';
import image5 from '../assets/webp/html_scc.webp';
import image6 from '../assets/webp/intero_web_internet.webp';
import image7 from '../assets/webp/nextjs.webp';
import image8 from '../assets/webp/JSlinckedin.webp';

import imageChat from '../assets/webp/CHATGPT.webp';
import imageBank from '../assets/webp/Bank.webp';
import imageEcommerce from '../assets/webp/Ecommerc.webp';

export const Links = [
	{
		id: 1,
		name: 'Home',
		path: '/',
	},
	{
		id: 2,
		name: 'About',
		path: '/#about',
	},
	{
		id: 3,
		name: 'Services',
		path: '/#services',
	},
	{
		id: 4,
		name: 'Certificates',
		path: '/#certificates',
	},
	{
		id: 5,
		name: 'Contact',
		path: '/#contact',
	},
	{
		id: 6,
		name: 'Projects',
		path: '/projects',
	},
];
export const skills = [
	{
		id: 1,
		name: 'HTML5',
		icon: <FaHtml5 className='text-orange-500' />,
	},
	{ id: 2, name: 'CSS3', icon: <FaCss3Alt className='text-blue-500' /> },
	{ id: 3, name: 'JavaScript', icon: <FaJs className='text-yellow-500' /> },
	{
		id: 4,
		name: 'TypeScript',
		icon: <SiTypescript className='text-blue-600' />,
	},
	{ id: 5, name: 'React.js', icon: <FaReact className='text-blue-500' /> },
	{ id: 6, name: 'Next.js', icon: <SiNextdotjs className='text-black' /> },
	{ id: 7, name: 'Redux', icon: <SiRedux className='text-purple-500' /> },
	{
		id: 8,
		name: 'Tailwind CSS',
		icon: <SiTailwindcss className='text-cyan-400' />,
	},
	{ id: 9, name: 'Node.js', icon: <FaNodeJs className='text-green-500' /> },
	{ id: 10, name: 'Express.js', icon: <SiExpress className='text-gray-500' /> },
	{
		id: 11,
		name: 'PostgreSQL',
		icon: <SiPostgresql className='text-blue-600' />,
	},
	{ id: 12, name: 'MongoDB', icon: <SiMongodb className='text-green-500' /> },
	{ id: 13, name: 'SQL', icon: <FaDatabase className='text-gray-500' /> },
];

export const testimonials = [
	{
		id: 1,
		name: 'Alex Johnson',
		comment:
			'Abdullah is an exceptional developer! His work is of the highest quality, and he always meets deadlines.',
	},
	{
		id: 2,
		name: 'Emily Davis',
		comment:
			'I have collaborated with Abdullah on several projects, and he consistently exceeds expectations. Highly recommended!',
	},
	{
		id: 3,
		name: 'Michael Brown',
		comment:
			'Professional, talented, and a pleasure to work with. Abdullah is simply the best in the business!',
	},
];

export const services = [
	{
		id: 1,
		title: 'AI Integration',
		description:
			'Integrating AI models and tools to improve decision making and automate tasks in your projects.',
		icon: (
			<FaRobot
				size={48}
				className='text-blue-500'
			/>
		),
	},
	{
		id: 2,
		title: 'Web Development',
		description:
			'Building modern, responsive websites and web applications using the latest technologies.',
		icon: (
			<FaCode
				size={48}
				className='text-green-500'
			/>
		),
	},
	{
		id: 3,
		title: 'Project Management',
		description:
			'Providing effective project management and ensuring that every aspect of your project runs smoothly.',
		icon: (
			<FaProjectDiagram
				size={48}
				className='text-purple-500'
			/>
		),
	},
	{
		id: 4,
		title: 'Custom Solutions',
		description:
			'Offering tailor-made solutions to meet your specific business needs with high-quality results.',
		icon: (
			<FaCogs
				size={48}
				className='text-orange-500'
			/>
		),
	},
];
export const certificates = [
	{ id: 1, name: 'Advanced JavaScript', image: image },
	{ id: 2, name: 'Advanced React', image: image1 },
	{ id: 3, name: 'Asynchronous JavaScript', image: image2 },
	{ id: 4, name: 'Basics of JavaScript', image: image3 },
	{ id: 5, name: 'Basics of Git', image: image4 },
	{ id: 6, name: 'HTML and CSS', image: image5 },
	{ id: 7, name: 'Intermediate Web', image: image6 },
	{ id: 8, name: 'Next.js ', image: image7 },
	{ id: 9, name: 'JavaScript', image: image8 },
];

export const projects = [
	{
		id: 1,
		title: 'E-Commerce Website',
		description:
			'An online store built with Next.js and Tailwind CSS. Integrated with Stripe for payment processing.',
		image: imageEcommerce,
		technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'Clerk'],
		path: 'https://youly-books-store.vercel.app/?fbclid=IwY2xjawFuZ8FleHRuA2FlbQIxMAABHbaBeVQyl_M4IlA3vLJ5uLz-i78b79EsZtGqbxB4WrAdykDp_-IheUv0mA_aem_ThX51oiI9iUHVuI9NKRYeg',
	},
	{
		id: 3,
		title: 'Modern Banking App',
		description: ' A modern banking app built with React.js and Tailwind CSS',
		image: imageBank,
		technologies: ['React.js', 'Tailwind CSS'],
		path: 'https://bank-modern-app-flame.vercel.app/',
	},
	{
		id: 2,
		title: 'AI Chatbot',
		description:
			'A chatbot powered by OpenAI GPT-4, integrated in a web application. Built with Next.js and PostgreSQL.',
		image: imageChat,
		technologies: [
			'OpenAI API',
			'Next.js',
			'postgerSQL',
			'Tailwind CSS',
			'SQL',
		],
		path: 'https://open-ai-nine-kohl.vercel.app/',
	},
];
