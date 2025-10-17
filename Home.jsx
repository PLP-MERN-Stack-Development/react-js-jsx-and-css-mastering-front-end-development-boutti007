import React from 'react';
import TaskManager from '../components/TaskManager';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <TaskManager />
        <div className="mt-6">
          <Card>
            <h3 className="font-semibold">Notes</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">This sample app demonstrates component structure, state management with hooks, context for theme, and a small API integration available on the Posts page.</p>
          </Card>
        </div>
      </div>

      <aside>
        <Card>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/posts" className="text-blue-600 hover:underline">Posts (API)</a></li>
            <li><a href="/about" className="text-blue-600 hover:underline">About</a></li>
          </ul>
        </Card>
      </aside>
    </div>
  );
}