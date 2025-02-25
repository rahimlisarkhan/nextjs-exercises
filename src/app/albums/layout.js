// app/albums/layout.js

import React from 'react';

// Layout specifically for the Albums section
export default function AlbumsLayout({ children }) {
  return (
    <div>
      <h2>Albums Section</h2>
      {children} {/* Render album-specific content here */}
    </div>
  );
}
