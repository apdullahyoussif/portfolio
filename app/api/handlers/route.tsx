/** @format */

import { currentUser } from '@clerk/nextjs/server';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const posts = await sql`SELECT * FROM posts ORDER BY date LIMIT 2 ;`;
		return NextResponse.json({ posts }, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error }, { status: 500 });
	}
}

export async function POST(request: Request) {
	const user = await currentUser();

	const { searchParams } = new URL(request.url);
	const id = searchParams.get('id');
	const title = searchParams.get('title');
	const description = searchParams.get('description');
	const content = searchParams.get('content');
	const date = searchParams.get('date');
	const author = user?.fullName;
	const authorImage = user?.imageUrl;

	try {
		await sql`INSERT INTO posts (id, author, authorImage, title, description, content, date) VALUES (${id}, ${author}, ${authorImage}, ${title}, ${description}, ${content}, ${date})`;
		return NextResponse.json(
			{ success: 'data inserted successfully' },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Error inserting post:', error);
		return NextResponse.json(
			{ error: 'failed to insert data' },
			{ status: 500 }
		);
	}
}

export async function DELETE(request: Request) {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get('id');

	if (!id) {
		return NextResponse.json({ error: 'id is required' }, { status: 400 });
	}

	try {
		const result = await sql`DELETE FROM posts WHERE id = ${id}`;
		if (result.rowCount === 0) {
			return NextResponse.json({ error: 'Post not found' }, { status: 404 });
		}
		return NextResponse.json(
			{ success: 'Post deleted successfully' },
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Failed to delete post' },
			{ status: 500 }
		);
	}
}
