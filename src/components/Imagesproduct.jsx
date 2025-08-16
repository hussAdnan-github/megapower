'use client'
 import Image from 'next/image'
import React, { useState } from 'react'

export default function Imagesproduct({ images , name }) {
      const [activeImage, setActiveImage] = useState(images[0]['image']);
   
    return (
        <div className="space-y-6">
            <div className="relative w-full aspect-square  dark-bg-li rounded-lg shadow-md flex items-center justify-center overflow-hidden">
                <Image src={activeImage} alt={name} layout="fill" objectFit="contain" />
            </div>
            <div className="flex justify-center gap-4">

                {images.map((img) => (

                    <Image
                        key={img.id}
                        src={img.image}
                        alt={`Thumbnail ${img.id + 1}`}
                        width={100}
                        height={100}
                        className={`cursor-pointer rounded-md border-2 transition-transform duration-300 transform hover:scale-105
                             ${activeImage === img.image ? 'border-blue-600 shadow-lg' : 'border-transparent'
                            }`}
                        onClick={() => setActiveImage(img.image)}
                    />
                ))}
            </div>
        </div>
    )
}
