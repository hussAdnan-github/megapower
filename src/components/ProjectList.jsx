'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { fadIn } from "@/lib/frameMotion";
import { motion } from 'framer-motion';

export default function ProjectList({ projects, locale, btnprojects }) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (

                <motion.div
                    variants={fadIn('up', .1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.1 }}
                    key={project.id}
                >
                    <Link
                        href={`/projects/${project.id}`}
                        className="dark-bg-li rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 overflow-hidden group flex flex-col h-full"
                    >
                        <div className="relative h-60 w-full overflow-hidden">
                            <Image
                                src={project.image}
                                alt={`${locale == 'ar' ? project.name_ar : project.name_en}`}
                                layout="fill"
                                objectFit="cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="transition-transform duration-500 group-hover:scale-125"
                            />
                        </div>
                        <div className="p-6 flex-grow flex flex-col">
                            <div className='flex gap-2 '>
                                {project['name_department'].map((depart, index) => (
                                    <span key={index} className="dark-text-li text-xs font-bold py-2 px-3 rounded-full bg-blue-600  uppercase mb-2">{`${locale == 'ar' ? depart.name_ar : depart.name_en}`}</span>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                {`${locale == 'ar' ? project.name_ar : project.name_en}`}
                            </h3>
                            <p className="flex-grow mb-4" style={{ wordWrap: "break-word" }}>
                                {`${locale == 'ar' ? project.short_description_ar : project.short_description_en}`}
                            </p>
                            <span className="mt-auto inline-block text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-300 group-hover:text-blue-800 dark:group-hover:text-blue-200">
                                {btnprojects}
                            </span>
                        </div>
                    </Link>
                </motion.div>))}
        </div>
    )
}
