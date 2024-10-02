import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

const Testimonials = dynamic(() => import('./components/Testimoials'), { ssr: false });
const Certificates = dynamic(() => import('./components/Certifitactes'), { ssr: false });
const Services = dynamic(() => import('./components/Services'), { ssr: false });

export default function Home() {
	return (
		<div>
			<Hero />
			<Skills />
			<About />
			<Suspense fallback={<div>Loading testimonials...</div>}>
				<Testimonials />
			</Suspense>
			<Suspense fallback={<div>Loading certificates...</div>}>
				<Certificates />
			</Suspense>
			<Suspense fallback={<div>Loading services...</div>}>
				<Services />
			</Suspense>
			<Contact />
		</div>
	);
}
