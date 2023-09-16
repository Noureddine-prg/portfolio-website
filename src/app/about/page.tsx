"use client"

import Wrapper from "@components/components/Wrapper";
import { CardTitle } from "@components/components/Typography";
import Navbar from "@components/components/Navbar/Navbar";
import {motion} from 'framer-motion';
import Icon from "@components/components/Icon/icon";

export default function About() {

  const leftSideVariants = {
    hidden: { opacity: 0, x: -400 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        x: { type: 'spring', stiffness: 100, damping: 10, mass: .5 },
        opacity: { duration: 1 }
      }
    }
  };
  
  const rightSideVariants = {
    hidden: { opacity: 0, x: 400 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        x: { type: 'spring', stiffness: 100, damping: 10, mass: .5 },
        opacity: { duration: 1}
      }
    }
  };  

  return (
    <Wrapper bgColor="bg-gradient-to-r from-[#054244] to-[#1C5355]">

      <Navbar/>

      {/* Bio Section */}
      <motion.div className="flex flex-row w-full h-full" initial="hidden" animate="visible">
        {/* Left Side */}
        <motion.div className="w-1/2 h-full flex flex-col" variants={leftSideVariants}>
          
          <span className="font-bold text-4xl"> Hi, nice to meet you. </span>
          <span className="font-bold text-7xl pt-6"> I’m Noureddine! </span>
          <div className="text-xl">
            <h1 className=" max-w-[650px] mt-10 ">
              Throughout my time at New York City College of Technology, I explored the world
              of software development with an excitement that led me beyond
              class assignments. This journey took me from academic pursuits to
              real-world applications, leading me to contribute to diverse
              software projects, spanning individual initiatives to
              collaborative team challenges.
              <div className="mt-10" />
              Currently, my expertise lies in <b>front-end</b> technologies like{" "}
              <b> React.js, React native, and Flutter, </b>complemented by
              backend prowess in tools such as SQL Database and MongoDB.
              <br />
              <div className="mt-10" />
              Outside formal work, I've been mastering agile project management,
              which I believe is instrumental in today’s dynamic tech landscape.
            </h1>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div className="w-1/2 flex flex-col items-end" variants={rightSideVariants}>
          
          <img
            src="/me.png"
            alt="Main Image"
            className="w-[500px] h-[650px] rounded-3xl border-2 border-white"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            }}            
          />     
        </motion.div>


      </motion.div>

      {/* Skill section */}

      <div className="flex flex-row w-full h-full mb-20 border-b-2 border-white">
        {/* Left Side */}

            <div className="flex flex-col h-full w-1/2">

              <div className="">
                <button/>
                <img></img>
              </div>
              
              <div className="">
                <button/>
                <img></img>
              </div>

            </div>
        {/* Right Side */}
            
            <div className="w-1/2 h-full text-center">
              
              <text className="font-bold text-7xl"> Here's What I Know </text>
              
              <div className="my-8 text-3xl"> Languages </div>

              <div className="flex flex-row justify-center space-x-6">
                <Icon img={"/"}/>
                <Icon img={"/"}/>
                <Icon img={"/"}/>
                <Icon img={"/"}/>
                <Icon img={"/"}/>
              </div>
              
              <div className="my-8 text-3xl"> Front-End </div>

              <div className="flex flex-row justify-center space-x-6">
                <Icon img={"/"}/>
                <Icon img={"/"}/>
                <Icon img={"/"}/>
                <Icon img={"/"}/>
                <Icon img={"/"}/>
                <Icon img={"/"}/>
                <Icon img={"/"}/>
                <Icon img={"/"}/>
              </div>
              
              <div className="my-8 text-3xl"> Back-End </div>

              <div className="flex flex-row justify-center space-x-6">
                <Icon img={""}/>
                <Icon img={""}/>
                <Icon img={"/"}/>
              </div>
              
              <div className="my-8 text-3xl">Dev Tools</div>
              <div className="flex flex-row justify-center space-x-6">
                <Icon img={"/"}/>
                <Icon img={"/"}/>
                <Icon img={"/"}/>
                <Icon img={"/"}/>
              </div>
            </div>


      </div>
    </Wrapper>
  );
}
