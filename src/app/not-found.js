// app/not-found.js

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ color: '#ff0000' }}>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>
        Go back to the homepage
      </a>
    </div>
  );
}
