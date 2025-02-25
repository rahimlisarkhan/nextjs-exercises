// app/posts/[id]/edit/page.js
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `https://blog-api-t6u0.onrender.com/posts/${id}`
      );
      if (response.ok) {
        const post = await response.json();
        setTitle(post.title);
        setBody(post.body);
      } else {
        alert('Failed to fetch post data.');
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(
      `https://blog-api-t6u0.onrender.com/posts/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
      }
    );

    if (response.ok) {
      alert('Post updated successfully!');
      router.push(`/posts/${id}`); // ✅ Redirect to post details page
    } else {
      alert('Failed to update post.');
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter post title"
          />
        </div>
        <div>
          <label>Body</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            placeholder="Enter post body"
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Post'}
        </button>
      </form>
    </div>
  );
}
