"use client";
import { useTheme } from "../components/ThemeProvider";
import { assets, infoList } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const About = () => {
  const { isDarkMode } = useTheme();

  const techSkills = {
    Frontend: [
      "React.js",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "EJS",
    ],
    Backend: ["Node.js", "Express.js", "RESTful APIs", "WebSockets"],
    Database: ["MongoDB", "SQL", "Prisma", "Firebase"],
    "AI/ML": [
      "TensorFlow",
      "LangChain",
      "Scikit-learn",
      "Neural Networks",
      "NLP",
    ],
    "Tools & Others": [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "NumPy & Pandas",
      "JWT Auth",
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full max-w-full py-10 px-4 sm:px-8 md:px-[12%] scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Overview
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center justify-center gap-16 min-h-[70vh] my-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.profile_img_main}
            alt="Profile"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="mb-6 max-w-2xl font-ovo">
            I'm a passionate software developer with strong skills in data
            structures, algorithms, and full-stack development. I enjoy building
            efficient, scalable solutions and thrive on solving real-world
            problems through continuous learning and hands-on experience.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={`${title}-${index}`}
                whileHover={{ scale: 1.05 }}
                className={`border border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500
                                ${
                                  isDarkMode
                                    ? "border-white hover:shadow-[4px_4px_0_#fff] hover:bg-[#2a004a]"
                                    : "hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000]"
                                }`}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3
                  className={`my-4 font-semibold text-gray-700 ${
                    isDarkMode ? "text-white" : ""
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-gray-600 text-sm ${
                    isDarkMode ? "text-white/80" : ""
                  }`}
                >
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Technical Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-20"
      >
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-center text-3xl sm:text-4xl font-ovo mb-16 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Technical Arsenal
        </motion.h3>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {Object.entries(techSkills).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`border border-gray-400 rounded-2xl p-8 cursor-pointer min-h-[200px] ${
                isDarkMode
                  ? "hover:bg-[#2a004a] hover:shadow-[6px_6px_0_#fff] hover:border-white"
                  : "hover:bg-[#fcf4ff] hover:shadow-[6px_6px_0_#000]"
              } transition-all duration-500`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`w-3 h-3 rounded-full ${
                    isDarkMode ? "bg-purple-400" : "bg-purple-600"
                  }`}
                ></span>
                <h4
                  className={`text-xl sm:text-2xl font-semibold ${
                    isDarkMode ? "text-purple-300" : "text-purple-700"
                  }`}
                >
                  {category}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={`${category}-${skill}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                      isDarkMode
                        ? "text-white/90 bg-purple-900/40"
                        : "text-gray-700 bg-purple-100/60"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <h4
            className={`text-center text-xl sm:text-2xl font-ovo mb-8 ${
              isDarkMode ? "text-white/90" : "text-gray-700"
            }`}
          >
            Core Strengths
          </h4>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              "350+ DSA Problems Solved",
              "DBMS & OOPS Expert",
              "Operating Systems",
              "Computer Networks",
              "Competitive Programming",
            ].map((badge, index) => (
              <motion.span
                key={`strength-${badge}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className={`px-6 py-3 rounded-full border-2 text-sm sm:text-base font-semibold cursor-pointer transition-all duration-300 ${
                  isDarkMode
                    ? "border-purple-400 text-purple-300 bg-purple-900/40 hover:bg-purple-900/60"
                    : "border-purple-600 text-purple-700 bg-purple-50 hover:bg-purple-100"
                }`}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
