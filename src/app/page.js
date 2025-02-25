// app/page.js

import Link from 'next/link';

export default async function HomePage() {
  const postsResponse = await fetch('https://blog-api-t6u0.onrender.com/posts');
  const posts = await postsResponse.json();

  return (
    <div>
      <h2>Latest Posts</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: '1px solid #ddd',
              padding: '10px',
              margin: '10px',
              width: '200px',
            }}
          >
            <h3>{post.title}</h3>
            <Link href={`/posts/${post.id}`}>
              <button
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '10px',
                }}
              >
                View Post
              </button>
            </Link>
          </div>
        ))}
      </div>
      <Link href="/create">
        <button
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px',
            marginTop: '20px',
          }}
        >
          Create New Post
        </button>
      </Link>
    </div>
  );
}
