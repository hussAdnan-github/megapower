import React from 'react'

export default function MainTitle({title}) {
  return (
     <h2 className="text-3xl md:text-4xl font-bold text-center   mb-12">
          {/* لماذا تختار <span className="text-blue-600">ميجا باور</span>؟ */}
        {title}
        </h2>
  )
}
