// app/components/UserCard.js

import Image from 'next/image';
import styles from './UserCard.module.css';

export default function UserCard({ user }) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://i.pravatar.cc/150?img=${user.id}`}
        alt={user.name}
        width={100}
        height={100}
        className={styles.avatar}
      />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p className={styles.address}>
        {user.address.city}, {user.address.street}
      </p>
    </div>
  );
}
