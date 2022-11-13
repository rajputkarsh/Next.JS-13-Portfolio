'use client';

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.

interface Post {
    id: string,
    title: string,
}

export default function HomePage({ recentPosts }: { recentPosts: Post[] }) {
    return (
        <div>
            {recentPosts.map((post) => (
                <div key={post.id} className="text-blue-500 dark:text-gray-800 w-full">{post.title}</div>
            ))}
        </div>
    );
}