import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-[#07102a] dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 text-sm text-gray-600 dark:text-gray-300 flex flex-col md:flex-row justify-between items-center">
        <div>© {new Date().getFullYear()} Task+API — Built with React & Tailwind</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}