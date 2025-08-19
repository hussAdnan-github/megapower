'use client';
import React from 'react'

export default function FillterProducts({department}) {
      const searchParams = useSearchParams();
      const activeType = searchParams.get('department');
  return (
    <div>FillterProducts</div>
  )
}
