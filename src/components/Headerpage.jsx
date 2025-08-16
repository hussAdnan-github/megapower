import React from 'react'

export default function Headerpage({title , subTitle}) {
    return (
        <div className="bg-blue-600 text-white text-center py-20 px-5">

            <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
            <p className="text-lg">{subTitle}</p>


        </div>
    )
}
