// Import your Client Component
import HomePage from './HomePage';

async function getPosts() {
        return [
            {
                id: "1",
                title: "ABCD",
            },
            {
                id: "2",
                title: "EFGH",
            },
            {
                id: "3",
                title: "IJKL",
            },
        ];
}

export default async function Page() {
    // Fetch data directly in a Server Component
    const recentPosts = await getPosts();
    // Forward fetched data to your Client Component
    return <HomePage recentPosts={recentPosts} />;
}