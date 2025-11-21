import React from "react";
import Navbar from "./Navbar";
// import heroImg from '../assets/hero.png'
import modelImg from "../assets/model2.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate()
  function goToLink(link){
    navigate(`/${link}`)
  }

  return (
    <div className=" relative h-screen ">

      

      <div className="h-full relative container flex justify-between items-end flex-row m-auto">
        <div className="w-full h-full py-[10vh] flex flex-col gap-6 items-center justify-end text-center">
          <motion.div initial={{opacity:0, y:50}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 0.6}}
            >
            <h1 className="font-bold text-8xl text-text font-fredoka">Physics Unlocking</h1>
            <p className="text-lg opacity-80 tracking-wide italic text-text-secondary font-poppins">
              Learn. Apply. Master.
            </p>
          </motion.div>

          <div className="flex justify-between w-full z-20 text-text-secondary font-poppins">
            {/* Left Side */}
            <motion.div
            initial={{opacity:0, x:-80}}
            animate={{opacity:1, x:0}}
            transition={{duration: 0.8}}
            className="w-[43%] pl-18 ">
              <p className="text-xl text-left  italic ">
                Hi, I'm <span className="font-semibold text-text">Gulshan Sharma</span>.
                I’ve created this platform to help you understand physics the
                way I teach it on YouTube — step by step, in a simple and
                practical manner. My aim is to make learning feel natural, just
                like sitting in a classroom.
                <br />
                <br />
                Here, you'll find everything you need to learn effectively.
              </p>
            </motion.div>

            {/* Right Side */}
            <motion.div
            initial={{opacity:0, x:80}}
            animate={{opacity:1, x:0}}
            transition={{duration: 0.8}} className="w-[43%] h-[55vh] flex items-start pr-18">
              <p className="text-xl text-end  italic">
                Physics is everywhere — in every motion, every force, and every
                change around us. To truly learn it, you must understand the
                concepts and then apply them.
                <br />
                <br />
                Start with{" "}
                <span 
                  onClick={()=> goToLink('lectures')}
                  className="text-primary cursor-pointer underline hover:uppercase hover:text-lg hover:text-secondary hover:font-bold  duration-100 ">
                  lectures
                </span>{" "}
                to understand the topics clearly, then visit{" "}
                <span 
                  onClick={()=> goToLink('practicals')}
                  className="text-primary cursor-pointer underline hover:uppercase hover:text-lg hover:text-secondary hover:font-bold  duration-100">
                  practicals
                </span>{" "}
                for diagrams and real-life applications. You can also attempt{" "}
                <span 
                  onClick={()=> goToLink('tests')}
                  className="text-primary cursor-pointer underline hover:uppercase hover:text-lg hover:text-secondary hover:font-bold  duration-100">
                  tests
                </span>{" "}
                to check your progress.
              </p>
            </motion.div>
          </div>
        </div>

        <div  className="w-full absolute overflow-hidden flex items-center justify-center">
          <motion.img
            initial={{opacity:0.2, scale:0.8}}
            animate={{opacity:1, scale:1}}
            transition={{type: "spring", stiffness: 50, duration:5}}
            className="w-[40%] object-contain drop-shadow-xl drop-shadow-[#00000038] "
            src={modelImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
