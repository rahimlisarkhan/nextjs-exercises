// app/posts/[id]/page.js

import PostActions from './PostActions';

export default async function PostPage({ params }) {
  const { id } = params;

  // Fetch post data from the API
  const postResponse = await fetch(
    `https://blog-api-t6u0.onrender.com/posts/${id}`
  );

  if (!postResponse.ok) {
    return <h1>Post Not Found</h1>;
  }

  const post = await postResponse.json();

  return (
    <div style={{ padding: '20px' }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      {/* Render the client component */}
      <PostActions id={id} />
    </div>
  );
}
