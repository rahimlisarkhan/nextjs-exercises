// app/page.js

import UserCard from './components/UserCard/UserCard';

export default async function HomePage() {
  // Fetching data on the server side
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store', // No cache for fresh data
  });
  const users = await res.json();

  return (
    <main>
      <h1 className="title">Next.js App with App Router & SSR</h1>
      <div className="user-list">
        {users.slice(0, 5).map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}
