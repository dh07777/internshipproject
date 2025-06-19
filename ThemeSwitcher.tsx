import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Home() {
  const [markdown, setMarkdown] = useState("# Hello Developer\nThis is your portfolio.");

  return (
    <div className="min-h-screen p-6 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Markdown Portfolio</h1>
        <ThemeSwitcher />
      </div>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        className="w-full h-40 mt-4 p-2 border rounded"
      />
      <div className="prose dark:prose-invert mt-4 max-w-none">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}