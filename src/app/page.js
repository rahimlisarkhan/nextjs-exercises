// app/page.js

import React from 'react';
import Link from 'next/link';

// Home page with album links
export default async function HomePage() {
  // Fetch the list of albums from the API to show on the Home page
  const albumsResponse = await fetch(
    'https://jsonplaceholder.typicode.com/albums'
  );
  const albums = await albumsResponse.json();

  return (
    <div>
      <h1>Home Page - Click on an Album</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {albums.map((album) => (
          <div
            key={album.id}
            style={{
              border: '1px solid #ddd',
              padding: '10px',
              margin: '10px',
              width: '200px',
            }}
          >
            <h3>{album.title}</h3>
            <Link href={`/albums/${album.id}`}>
              <button
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  padding: '10px',
                }}
              >
                View Album
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
