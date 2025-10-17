import React, { useEffect, useMemo, useState } from 'react';
import Card from '../components/Card';
import Loader from '../components/Loader';

/**
 * Posts page - fetches JSONPlaceholder posts and shows:
 * - loading / error states
 * - client-side pagination
 * - search by title
 */
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error('Network response not ok');
        return res.json();
      })
      .then(data => setPosts(data))
      .catch(err => setError(err.message || 'Error'))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return posts;
    return posts.filter(p => p.title.toLowerCase().includes(term) || p.body.toLowerCase().includes(term));
  }, [posts, q]);

  const total = filtered.length;
  const pageCount = Math.ceil(total / pageSize);
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    if (page > pageCount) setPage(1);
  }, [pageCount, page]);

  return (
    <div className="space-y-4">
      <Card>
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold">Posts (JSONPlaceholder)</h2>
          <div className="ml-auto flex items-center gap-2">
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search posts..." className="px-3 py-2 rounded border dark:border-gray-700 bg-gray-50 dark:bg-[#021226]" />
          </div>
        </div>
      </Card>

      <Card>
        {loading && <div className="py-8"><Loader /></div>}
        {error && <div className="text-red-500">Error: {error}</div>}
        {!loading && !error && (
          <>
            <div className="grid gap-3">
              {pageItems.map(p => (
                <article key={p.id} className="p-3 border rounded bg-gray-50 dark:bg-[#021226] dark:border-gray-800">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">{p.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-500">{total} results</div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 rounded border" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
                <div className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-800">Page {page} / {pageCount || 1}</div>
                <button className="px-3 py-1 rounded border" onClick={() => setPage(p => Math.min(pageCount || 1, p + 1))} disabled={page === pageCount || pageCount === 0}>Next</button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}