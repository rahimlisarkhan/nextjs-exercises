import Link from 'next/link';

export default async function HomePage() {
  return (
    <main>
      <h1 className="title">
        HOME
        <Link href="/posts">Click -POSTS</Link>
      </h1>
    </main>
  );
}
