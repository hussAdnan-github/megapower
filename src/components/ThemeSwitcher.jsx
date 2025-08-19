// src/components/ThemeSwitcher.jsx
'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // useEffect runs only on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-[10px] border-2 rounded-full hover:cursor-pointer "
    >
      {resolvedTheme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}