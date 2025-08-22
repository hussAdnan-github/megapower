import React from 'react'

export default function loading() {
  return (
      <div className="relative w-full h-[600px]">
        <div className="absolute top-1/2 left-1/2 w-[40%] h-[40%] animate-custom-pulse-main">
          <svg
            viewBox="0 0 32 32"
            className="w-full h-full fill-yellow-300 animate-custom-rotate"
            style={{ filter: "drop-shadow(0 0 10px #ffc107)" }}
          >
            <path d="M21.43,2.25,8.48,15.82a.5.5,0,0,0,.41.78H14L10.57,29.75a.5.5,0,0,0,.91.41L23.52,16.18a.5.5,0,0,0-.41-.78H18Z" />
          </svg>
        </div>
      </div>
  )
}
