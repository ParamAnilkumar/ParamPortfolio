"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import img from '../../public/avatar1-modified.png';
import { PiMoonStarsBold } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { MdEventSeat } from "react-icons/md";
import { PiChatsCircleBold } from "react-icons/pi";
import { MdAirplaneTicket } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaJava } from "react-icons/fa6";
import { GrCloudComputer } from "react-icons/gr";
import { useState } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // Animation occurs once
    });
  }, []);
  const [darkMode,setDarkMode] = useState(true);
  return (
    
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 text-black  dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen" data-aos="fade-up">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl cursor-not-allowed focus:cursor-auto">Param Patel</h1>
            <ul className="flex items-center">
              <li><PiMoonStarsBold onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" /></li>
              <li><a className="bg-gradient-to-r from-slate-700 to-cyan-700 bg-slate-700 text-white px-4 py-2 rounded-md ml-8 hover:bg-gradient-to-l from-slate-700 to-cyan-700" href="#">Download Resume</a></li>
            </ul>
          </nav>

          <div className="relative flex justify-center mt-20 mx-auto" data-aos="fade-up">
            <Image alt="Avatar" src={img} className="h-48 w-48" />
          </div>

          <div className="text-center p-10" data-aos="fade-up">
            <h2 className="text-5xl py-2 font-medium  bg-gradient-to-r from-slate-700 to-cyan-700 inline-block text-transparent bg-clip-text  sm:text-6xl  dark:from-slate-300 dark:to-cyan-500 transition-all duration-500 hover:from-blue-500 hover:to-teal-400 hover:underline decoration-wavy
           
            ">
              Param Patel
            </h2>
            <h3 className="text-3xl py-2">Junior Software Developer</h3>
            <p className="text-xl py-5 leading-7 text-gray-800 dark:text-white">I am a passionate Software Engineer and final-year Computer Programming and Analysis student, skilled in Android Development, backend development with Spring Boot and NodeJS, and database management...</p>
          </div>

          <div data-aos="fade-up">
            <ul className="flex items-center justify-evenly">
              <li><a href="#skills" className="text-l bg-gradient-to-l from-slate-700 to-cyan-700 bg-slate-700 text-white p-2 rounded-md ml-8">Skills</a></li>
              <li><a href="#projects" className="text-l bg-gradient-to-l from-slate-700 to-cyan-700 bg-slate-700 text-white p-2 rounded-md ml-8">Projects</a></li>
              <li><a href="#" className="text-l bg-gradient-to-l from-slate-700 to-cyan-700 bg-slate-700 text-white p-2 rounded-md ml-8">Certificates</a></li>
              <li><a href="#socials" className="text-l bg-gradient-to-l from-slate-700 to-cyan-700 bg-slate-700 text-white p-2 rounded-md ml-8">Socials</a></li>
            </ul>
          </div>
        </section>

        <section id="skills" className="mt-20" data-aos="fade-up">
          <div className="p-5">
            <h3 className="text-3xl pb-20">Skills</h3>
            <div>
              <h2 className="text-2xl">Programming and Framework Expertise</h2>
              <ul>
                <li className="text-l pt-6">
                  <strong className="text-blue-500">Object-Oriented Programming:</strong> Proficient in designing scalable and reusable applications using <strong className="text-teal-500">Java</strong> and <strong className="text-teal-500">C#</strong>.
                </li>
                <li className="text-l pt-6">
                  <strong className="text-blue-500">Android Development:</strong> Skilled in building user-friendly mobile applications with <strong className="text-teal-500">Java</strong> and <strong className="text-teal-500">Android Studio</strong>.
                </li>
                <li className="text-l pt-6">
                  <strong className="text-blue-500">ASP.NET:</strong> Experienced in developing robust web applications using <strong className="text-teal-500">C#</strong> and <strong className="text-teal-500">ASP.NET</strong>.
                </li>
                <li className="text-l pt-6">
                  <strong className="text-blue-500">Spring Boot:</strong> Adept at creating microservices and RESTful APIs with <strong className="text-teal-500">Spring Boot</strong> in Java.
                </li>
                <li className="text-l pt-6"><strong className="text-blue-500">Web Development Basics:</strong> Basics of HTML, CSS, Js, Nodejs</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl pt-10">Databases</h2>
              <p className="text-l pt-4">
                Hands-on experience with relational and non-relational databases: <strong className="text-teal-500">MySQL</strong>, <strong className="text-teal-500">PostgreSQL</strong>, <strong className="text-teal-500">Firebase RealtimeDatabase</strong>, and <strong className="text-teal-500">MongoDB</strong>.
              </p>
            </div>
            <div>
              <h2 className="text-2xl pt-10">Others</h2>
              <ul>
                <li className="text-l pt-6">Proficient in containerization and deployment using <strong className="text-teal-500">Docker</strong>.</li>
                <li className="text-l pt-6">Version control expertise with <strong className="text-teal-500">GitHub</strong> for collaborative and efficient coding.</li>
                <li className="text-l pt-6">Familiarity with <strong className="text-teal-500">Amazon AWS</strong> for cloud-based services and hosting.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-20" data-aos="fade-up">
          <div className=" p-5">
            <h3 className="text-3xl pb-20">Projects</h3>
            <ul>
              <li className="flex items-center justify-center pb-5">
                <FaJava className="text-5xl p-2 "/><p>Ticket booking, Employee Management system, and Student Management system using Advanced OOP concepts.</p>
              </li>
              <li className="flex items-center justify-center pb-5">
                <PiChatsCircleBold className="text-5xl p-2 "/><p>Real-time chat application with Android Studio.</p>
              </li>
              <li className="flex items-center justify-center pb-5">
                <MdEventSeat className="text-5xl p-2 "/><p>Event booking application using the Spring Boot framework in Java.</p>
              </li>
              <li className="flex items-center justify-center pb-5">
                <MdAirplaneTicket className="text-5xl p-2 "/><p>Flight booking system using Spring Boot.</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="socials" >
          <div className="text-5xl flex justify-center gap-16 py-3 text-slate-600">
            <a href="https://www.linkedin.com/in/param-patel-830902343/"><IoLogoLinkedin className="hover:text-cyan-700"/></a>
            <a href="https://github.com/ParamAnilkumar"><FaGithub className="hover:text-cyan-700"/></a>
            <a href="https://www.instagram.com/paramakp21/"><IoLogoInstagram className="hover:text-cyan-700"/></a>
          </div>
        </section>
      </main>
    </div>
  );
}
