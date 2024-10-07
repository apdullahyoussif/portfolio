/** @format */

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Loading from './loading';

const Testimonials = dynamic(() => import('./components/Testimoials'), {
	ssr: false,
});
const Certificates = dynamic(() => import('./components/Certifitactes'), {
	ssr: false,
});
const Services = dynamic(() => import('./components/Services'), { ssr: false });

export default function Home() {
	return (
		<div>
			<Hero />
			<Skills />
			<About />
			<Suspense fallback={<Loading />}>
				<Testimonials />
			</Suspense>
			<Suspense  fallback={<Loading />}>
				<Certificates />
			</Suspense>
			<Suspense  fallback={<Loading />}>
				<Services />
			</Suspense>
			<Contact />
		</div>
	);
}
