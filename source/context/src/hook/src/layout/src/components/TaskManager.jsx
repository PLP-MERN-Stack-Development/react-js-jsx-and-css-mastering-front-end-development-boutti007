import React, { useEffect, useMemo, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './Button';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

/**
 * TaskManager component:
 * - add tasks
 * - toggle complete
 * - delete tasks
 * - filter: All, Active, Completed
 */
export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks_v1', [
    { id: uuidv4(), text: 'Sample task: Try the Posts page', completed: false }
  ]);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    if (filter === 'active') return tasks.filter(t => !t.completed);
    if (filter === 'completed') return tasks.filter(t => t.completed);
    return tasks;
  }, [tasks, filter]);

  const add = e => {
    e.preventDefault();
    const trimmed = (text || '').trim();
    if (!trimmed) return;
    setTasks([{ id: uuidv4(), text: trimmed, completed: false }, ...tasks]);
    setText('');
  };

  const toggle = id => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const del = id => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  useEffect(() => {
    // Example side-effect placeholder: nothing heavy
  }, []);

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-3">Task Manager</h2>

      <form onSubmit={add} className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 px-3 py-2 rounded border dark:border-gray-700 bg-gray-50 dark:bg-[#021226] focus:outline-none"
        />
        <Button type="submit" variant="primary">Add</Button>
      </form>

      <div className="flex items-center gap-2 mb-3">
        <Button variant={filter === 'all' ? 'primary' : 'secondary'} size="sm" onClick={() => setFilter('all')}>All</Button>
        <Button variant={filter === 'active' ? 'primary' : 'secondary'} size="sm" onClick={() => setFilter('active')}>Active</Button>
        <Button variant={filter === 'completed' ? 'primary' : 'secondary'} size="sm" onClick={() => setFilter('completed')}>Completed</Button>
        <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">{tasks.length} tasks</div>
      </div>

      <ul className="space-y-2">
        {filtered.length === 0 && <div className="text-sm text-gray-500">No tasks.</div>}
        {filtered.map(task => (
          <li key={task.id} className="flex items-center justify-between bg-gray-50 dark:bg-[#021226] p-2 rounded border dark:border-gray-800">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={task.completed} onChange={() => toggle(task.id)} className="w-4 h-4" />
              <span className={task.completed ? 'line-through text-gray-400' : ''}>{task.text}</span>
            </div>
            <div>
              <Button variant="danger" size="sm" onClick={() => del(task.id)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}