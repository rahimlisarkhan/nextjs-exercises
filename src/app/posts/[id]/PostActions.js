// app/posts/[id]/PostActions.js
'use client';

import { useRouter } from 'next/navigation';

export default function PostActions({ id }) {
  const router = useRouter();

  const handleDelete = async () => {
    const response = await fetch(
      `https://blog-api-t6u0.onrender.com/posts/${id}`,
      {
        method: 'DELETE',
      }
    );

    if (response.ok) {
      alert('Post deleted successfully!');
      router.push('/');
    } else {
      alert('Failed to delete post.');
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <button
        onClick={() => router.push(`/posts/${id}/edit`)}
        style={{ backgroundColor: '#007bff', color: 'white', padding: '10px' }}
      >
        Edit Post
      </button>
      <button
        onClick={handleDelete}
        style={{
          backgroundColor: '#dc3545',
          color: 'white',
          padding: '10px',
          marginLeft: '10px',
        }}
      >
        Delete Post
      </button>
    </div>
  );
}
