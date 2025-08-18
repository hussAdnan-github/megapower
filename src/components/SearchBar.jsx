'use client';

import { useState, useEffect } from 'react';

// المكون الآن يستقبل دالة `onSearchChange` كـ prop
export default function SearchBar({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  // هذا الـ useEffect سيقوم بتطبيق الـ debouncing
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      // عندما يتوقف المستخدم عن الكتابة، استدع الدالة التي تم تمريرها
      onSearchChange(searchTerm);
    }, 500); // ننتظر 500 مللي ثانية

    // دالة التنظيف لإلغاء المؤقت
    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);
//   , onSearchChange

  return (
    <input
      type="text"
      placeholder="ابحث..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 pl-10 border border-gray-300 rounded-md text-black"
    />
  );
}