import './ui/styles/globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from './ui/theme-provider';
import { Cairo } from 'next/font/google';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

const cairo = Cairo({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Abdullah Youssef',
	description: 'Portfolio app',
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
	return (
		<ClerkProvider>
			<html lang='en'  suppressHydrationWarning={true}>
				<body className={`${cairo.className} antialiased bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100`}>
					<ThemeProvider attribute='class'>
						<Navbar />
						{children}
						<Footer />
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}