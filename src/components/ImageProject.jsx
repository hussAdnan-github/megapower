
'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function ImageProject({ images, title }) {
    console.log(images['data']['result'])
    return (
        <>
            {/* <div className="flex gap-4 overflow-x-auto justify-center"> */}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {images['data']['result'].map((img, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={img.image}
                            alt={`${title} صورة المشروع ${index + 1}`}
                            width={80}
                            height={80}
                            className={`cursor-pointer rounded-lg border-2 transition-transform duration-300 transform hover:scale-105 
                 `}

                        />
                    </SwiperSlide>
                ))}


            </Swiper>
            {/* </div> */}

        </>
    )
}
