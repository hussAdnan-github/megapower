// 'use client'
//  import Image from 'next/image'
// import React, { useMemo, useState } from 'react'

// export default function Imagesproduct({ images , name , mainImage }) {
//         // const [activeImage, setActiveImage] = useState(mainImage || (images && images.length > 0 ? images[0].image : ''));

//       const [activeImage, setActiveImage] = useState(mainImage || images[0].image);
//     const displayImages = useMemo(() => {
//         if (!images) return [];

//         const mainImageExists = images.some(img => img.image === mainImage);

//         if (mainImageExists || !mainImage) {
//             return images;
//         }
//         return [
//             { 
//                 id: 'main-image', 
//                 image: mainImage 
//             },
//             ...images
//         ];
//     }, [images, mainImage]);  
//     return (
//         <div className="space-y-6">
//             <div    className="relative w-full aspect-square  dark-bg-li rounded-lg shadow-md flex items-center justify-center overflow-hidden">
//                 <Image src={activeImage} alt={name} layout="fill" objectFit="contain" />
//             </div>
//             <div    className="flex justify-center gap-4">

//                 {displayImages.map((img) => (

//                     <Image
//                         key={img.id}
//                         src={img.image}
//                         alt={`Thumbnail ${img.id + 1}`}
//                         width={100}
//                         height={100}
//                         className={`cursor-pointer rounded-md border-2 transition-transform duration-300 transform hover:scale-105
//                              ${activeImage === img.image ? 'border-blue-600 shadow-lg' : 'border-transparent'
//                             }`}
//                         onClick={() => setActiveImage(img.image)}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }



'use client'
import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Imagesproduct({ images, name, mainImage }) {
    const [activeImage, setActiveImage] = useState(mainImage || (images && images.length > 0 ? images[0].image : ''));

    const displayImages = useMemo(() => {
        if (!images) return [];
        const mainImageExists = images.some(img => img.image === mainImage);
        if (mainImageExists || !mainImage) {
            return images;
        }
        return [{ id: 'main-image', image: mainImage }, ...images];
    }, [images, mainImage]);

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 }
    };

    return (
        <div className="space-y-6">

            <div className="relative w-full aspect-square dark-bg-li rounded-lg shadow-md flex items-center justify-center overflow-hidden">

                <AnimatePresence mode="wait">

                    <motion.div
                        key={activeImage}
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="relative w-full h-full"
                    >
                        {/* <Image 
                            src={activeImage} 
                            alt={name} 
                            layout="fill" 
                            objectFit="contain" 
                            priority  
                        /> */}

                        <Image
                            src={activeImage}
                            alt={name}
                            fill // استخدم fill بدلاً من layout="fill"
                            style={{ objectFit: 'contain' }} // انقل objectFit إلى خاصية style
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div>


            <div className="flex justify-center gap-4 flex-wrap"> {/* إضافة flex-wrap لتحسين العرض على الشاشات الصغيرة */}
                {displayImages.map((img) => (
                    <div
                        key={img.id}
                        className={`cursor-pointer rounded-md border-2 transition-all duration-300 transform hover:scale-105
                            ${activeImage === img.image ? 'border-blue-600 shadow-lg' : 'border-transparent'
                            }`}
                        onClick={() => setActiveImage(img.image)}
                    >
                        <Image
                            src={img.image}
                            alt={`Thumbnail of ${name}`}
                            width={100}
                            height={100}
                            className="rounded-sm" // تعديل بسيط ليتناسب مع الإطار
                            objectFit="cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}