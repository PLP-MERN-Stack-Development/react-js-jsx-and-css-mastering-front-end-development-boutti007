import React from 'react';
import Card from '../components/Card';

export default function About() {
  return (
    <Card>
      <h2 className="text-lg font-semibold">About this demo</h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        This is a demonstration React app built with Vite and Tailwind CSS for the course assignment. It shows component architecture, state management using hooks (useState, useEffect, useContext),
        a custom hook (useLocalStorage) and a small API integration (JSONPlaceholder).
      </p>
    </Card>
  );
}