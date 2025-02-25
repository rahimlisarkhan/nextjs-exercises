import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div
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
  );
};

export default PostCard;
