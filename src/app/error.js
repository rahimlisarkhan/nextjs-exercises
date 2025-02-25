// app/error.js

'use client';

import { useEffect, useState } from 'react';

export default function ErrorPage({ error, reset }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (error) {
      setHasError(true);
    }
  }, [error]);

  if (hasError) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#ff0000' }}>Oops! Something went wrong.</h2>
        <p>Please try again later.</p>
        <button
          onClick={() => reset()}
          style={{
            backgroundColor: '#0070f3',
            padding: '10px 20px',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return null; // Fallback when there's no error
}
