/** @format */
"use server"
import { createClient, sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function connactToDB() {
	const client = createClient();
	await client.connect();

	try {
		if (client) {
			console.log('Connected to PostgreSQL YYS');
			return client;
		}
	} catch (error) {
		console.error('Error connecting', error);
	}
}

export async function getPosts() {
	noStore();
	await new Promise((resolve) => setTimeout(resolve, 2000));
	try {
		const data = await sql`SELECT * FROM posts;`;

		return data.rows ;
	} catch (error) {
		console.log(error);
	}
}
