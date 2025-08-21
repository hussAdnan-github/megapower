
'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function ImageProject({ images, title }) {

    return (
        <>
            {/* <div className="flex gap-4 overflow-x-auto justify-center"> */}
            <Swiper
                data-aos="fade-up" data-aos-delay="100"
                navigation={true}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Navigation, Autoplay]}

                className=" mySwiper">
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center items-center w-full h-full dark-bg-li">
                            <div style={{ width: 1200, height: 450 }} className="flex items-center justify-center">
                                <Image
                                    src={img.image}
                                    alt={`${title} صورة المشروع ${index + 1}`}
                                    width={1200}
                                    height={450}
                                    style={{ objectFit: 'fill', width: 1200, height: 450 }}
                                    className=" cursor-pointer rounded-lg border-2 transition-transform duration-300 transform hover:scale-105"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* </div> */}

        </>
    )
}
