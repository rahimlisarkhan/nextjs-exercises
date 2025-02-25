// app/albums/[id]/page.js

import React from 'react';

// This page uses SSR to fetch album data based on the dynamic `id`
export default async function AlbumPage({ params }) {
  const { id } = params;

  // Fetch album data from the API based on the album ID
  const albumResponse = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}`
  );
  const albumData = await albumResponse.json();

  if (!albumData) {
    return <h1>Album Not Found</h1>;
  }

  return (
    <div>
      <h1>Album Details</h1>
      <h2>{albumData.title}</h2>
      <p>Album ID: {albumData.id}</p>
      <p>User ID: {albumData.userId}</p>
    </div>
  );
}
