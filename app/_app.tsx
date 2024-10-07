/** @format */

import Head from 'next/head';
// app/_app.ts
export default function MyApp({
	Component,
	pageProps,
}: {
	Component: React.ComponentType;
	pageProps: Record<string, unknown>;
}) {
	return (
		<>
			<Head>
				<link rel='icon' type='image/png' href='/favicon.png' />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

