// app/posts/page.js

import axios from 'axios';
import PostCard from '../components/PostCard/PostCard';
import styles from '../components/PostCard/PostCard.module.css';

// Server-side data fetching with `use server`
export const revalidate = 60; // Revalidate every 60 seconds

const fetchPosts = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const posts = response.data;
  return posts;
};

export default async function PostsPage() {
  const posts = await fetchPosts(); // Server-side fetching of posts

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Posts</h1>
      <div className={styles.postList}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
