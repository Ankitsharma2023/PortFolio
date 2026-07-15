"use client";
import { useTheme } from "../components/ThemeProvider";
import React from 'react';
import { motion } from "motion/react";

const Experience = () => {
    const { isDarkMode } = useTheme();

    const experienceData = [
        {
            role: "Full Stack Intern",
            company: "Voltra",
            location: "Gurugram",
            duration: "Feb 2025 – Apr 2025",
            description: [
                "Designed and implemented a responsive, high-performance web interface using React.js; reduced page load latency by 45% for a startup incubated at IIT Roorkee.",
                "Refactored MongoDB queries to reduce backend load times by 50%, enhancing system scalability and responsiveness."
            ],
            technologies: ["React.js", "MongoDB", "Performance Optimization"]
        },
        {
            role: "SDE Intern",
            company: "BingeClip AI",
            location: "Bangalore",
            duration: "Dec 2024 – Jan 2025",
            description: [
                "Engineered a low-latency AI video editing UI using React.js and Supabase; integrated asynchronous API calls to improve performance by 30%.",
                "Integrated RESTful APIs for efficient video storage and retrieval, enabling smooth user interaction and enhancing overall UI responsiveness."
            ],
            technologies: ["React.js", "Supabase", "RESTful APIs", "AI Integration"]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='experience'
            className='w-full max-w-full py-10 px-4 sm:px-8 md:px-[12%] scroll-mt-20'>

            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-ovo'>
                Professional Journey
            </motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-ovo'>
                Work Experience
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                Hands-on experience in building scalable web applications, optimizing performance, and delivering high-quality user experiences across diverse tech stacks.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='max-w-4xl mx-auto space-y-8'>
                
                {experienceData.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        className={`border border-gray-400 rounded-lg p-6 sm:p-8 cursor-pointer 
                        hover:-translate-y-1 duration-500 
                        ${isDarkMode 
                            ? "hover:bg-[#2a004a] hover:shadow-[4px_4px_0_#fff]" 
                            : "hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000]"
                        }`}>
                        
                        {/* Header Section */}
                        <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4'>
                            <div>
                                <h3 className={`text-xl sm:text-2xl font-semibold mb-1 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                                    {exp.role}
                                </h3>
                                <p className={`text-lg font-medium ${isDarkMode ? "text-purple-300" : "text-purple-600"}`}>
                                    {exp.company}
                                </p>
                            </div>
                            <div className='text-left sm:text-right'>
                                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                                    {exp.duration}
                                </p>
                                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                    {exp.location}
                                </p>
                            </div>
                        </div>

                        {/* Description Section */}
                        <ul className='space-y-3 mb-4'>
                            {exp.description.map((point, idx) => (
                                <li 
                                    key={idx}
                                    className={`flex gap-2 text-sm sm:text-base leading-relaxed ${
                                        isDarkMode ? "text-white/90" : "text-gray-700"
                                    }`}>
                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                        isDarkMode ? "bg-purple-400" : "bg-purple-600"
                                    }`}></span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Technologies Section */}
                        <div className='flex flex-wrap gap-2'>
                            {exp.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className={`px-3 py-1 text-xs sm:text-sm rounded-full border ${
                                        isDarkMode 
                                            ? "border-purple-400 text-purple-300 bg-purple-900/30" 
                                            : "border-purple-600 text-purple-700 bg-purple-50"
                                    }`}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Experience;
