import React from 'react';

export default function Loader({ size = 6 }) {
  return (
    <div className="flex items-center justify-center">
      <div
        className="animate-spin rounded-full border-t-2 border-b-2 border-blue-600"
        style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
        aria-hidden
      />
    </div>
  );
}