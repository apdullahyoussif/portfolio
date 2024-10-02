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
import image from '../assets/advJS.png';
import image1 from '../assets/advReact.png';
import image2 from '../assets/asyncJS.png';
import image3 from '../assets/basicsJS.png';
import image4 from '../assets/basiscgit.png';
import image5 from '../assets/html_scc.png';
import image6 from '../assets/intero_web_internet.png';
import image7 from '../assets/nextjs.png';
import image8 from '../assets/JSlinckedin.png';
import { FaRobot, FaCode, FaProjectDiagram, FaCogs } from 'react-icons/fa';

import imageChat from '../assets/CHATGPT.png';
import imageBank from '../assets/Bank.png';
import imageEcommerce from '../assets/Ecommerc.png';
import imageEdit from '../assets/projectEditor.png';

export const Links = [
	{
		id: 1,
		name: 'Home',
		path: '/',
	},
	{
		id: 2,
		name: 'About',
		path: '#about',
	},
	{
		id: 3,
		name: 'Services',
		path: '#services',
	},
	{
		id: 4,
		name: 'Projects',
		path: '/projects',
	},
	{
		id: 5,
		name: 'Contact',
		path: '#contact',
	},
];
export const skills = [
	{ id: 1, name: 'HTML5', icon: <FaHtml5 className='text-orange-500' /> },
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
		name: 'John Doe',
		comment:
			'Abdullah is a fantastic developer! His work is top-notch, and he always delivers on time.',
	},
	{
		id: 2,
		name: 'Jane Smith',
		comment:
			'I have worked with Abdullah on multiple projects, and he never disappoints. Highly recommended!',
	},
	{
		id: 3,
		name: 'Sam Wilson',
		comment:
			'Professional, talented, and easy to work with. Abdullah is simply the best!',
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
	},
	{
		id: 3,
		title: 'Modern Banking App',
		description: ' A modern banking app built with React.js and Tailwind CSS',
		image: imageBank,
		technologies: ['React.js', 'Tailwind CSS'],
	},
	{
		id: 4,
		title: 'Editor App',
		description: 'A text editor app built with JavaScript and CSS',
		image: imageEdit,
		technologies: ['JavaScript', ' CSS', 'HTML'],
	},
];
