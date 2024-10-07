import { Post } from '@/app/lib/definition';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post }: { post: Post }) => {
  if (!post) {
    return null;
  }

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg my-4 transition-transform transform hover:scale-105 h-full bg-white dark:bg-gray-700">
      <div className="flex flex-col h-full">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className='flex items-center space-x-2'>
            {post.authorimage && (
              <Image
                src={post.authorimage}
                alt='Picture of the author'
                width={50}
                height={50}
                priority
                className='rounded-full'
              />
            )}
            <p className="font-medium text-gray-700 dark:text-gray-300">{post.author}</p>
          </div>
          <span className="text-gray-500 dark:text-gray-400">{new Date(post.date).toLocaleDateString()}</span>
        </div>

        <div className="px-6 py-4 flex-grow">
          <p className="text-gray-800 text-center dark:text-gray-200 text-2xl font-semibold mb-2">
            {post.title}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-base">{post.description}</p>
        </div>
        <div className=" pt-4 pb-2">
          <Link aria-label="Read Link"  href={`/blog/post/${post.id}`} className='inline-block max-w-fit'>
            <p className="text-blue-600 hover:text-indigo-700 font-bold py-2 px-4  transition duration-200">
              Read More...
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
