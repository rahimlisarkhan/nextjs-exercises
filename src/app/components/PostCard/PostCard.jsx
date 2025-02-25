// app/components/PostCard.js

import styles from './PostCard.module.css';

export default function PostCard({ post }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <p className={styles.postBody}>{post.body}</p>
    </div>
  );
}
