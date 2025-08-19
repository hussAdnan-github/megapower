'use client';

import { useState, useEffect } from 'react';

// المكون الآن يستقبل دالة `onSearchChange` كـ prop
export default function SearchBar({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');

 
  useEffect(() => {
 
      onSearchChange(searchTerm);
     
 
  }, [searchTerm]);
//   , onSearchChange

  return (
    <input
      type="text"
      placeholder="ابحث..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 pl-10 border bg-white border-gray-300 rounded-md text-black"
    />
  );
}