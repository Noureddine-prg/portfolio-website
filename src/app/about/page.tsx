"use client"

import Wrapper from "@components/components/Wrapper";
import Navbar from "@components/components/Navbar/Navbar";
import {motion} from 'framer-motion';
import Icon from "@components/components/Icon/icon";

export default function About() {

  const leftSideVariants = {
    hidden: { opacity: 0, y: -500 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        y: { type: 'spring', stiffness: 100, damping: 10, mass: .5 },
        opacity: { duration: .5 }
      }
    }
  };
  
  const rightSideVariants = {
    hidden: { opacity: 0, y: 500 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        y: { type: 'spring', stiffness: 100, damping: 10, mass: .5 },
        opacity: { duration: .5}
      }
    }
  };  

  return (

    //
    <Wrapper bgColor="bg-[#294D46]">

      <Navbar/>

      {/* Bio Section */}
      <motion.div className="flex flex-col md:flex-row w-full h-3/4" initial="hidden" animate="visible">
    {/* Left Side */}
    <motion.div className="w-full md:w-1/2 h-full flex flex-col" variants={leftSideVariants}>
        

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
              <b> back-end</b> prowess in <b> Java and tools such as mySQL and MongoDB. </b>
              <br />
              <div className="mt-10" />
              Outside formal work, I've been mastering agile project management,
              which I believe is instrumental in today’s dynamic tech landscape.
            </h1>
          </div>
        </motion.div>

    {/* Right Side */}
    <motion.div className="w-full md:w-1/2 flex flex-col items-center md:items-end" variants={rightSideVariants}>
        
        <img
            src="/me.png"
            alt="Main Image"
            className="w-[300px] md:w-[500px] h-[400px] md:h-[650px] rounded-3xl border-2 border-white"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            }}            
        />     
    </motion.div>
    
    </motion.div>

      {/* Skill section */}

      <div className="flex flex-col md:flex-row mt-40 w-full h-full mb-20 border-b-2 border-white">
    {/* Right Side */}
        
    <div className="w-full h-full text-center">
        
        <text className="font-bold text-4xl md:text-5xl"> <u>Skills</u> </text>
        
              
              <div className="my-8 text-3xl"> Languages </div>

              <div className="flex flex-row justify-center space-x-6">
                <Icon img={"/Icons/Python.png"}/>
                <Icon img={"/Icons/C++.png"}/>
                <Icon img={"/Icons/C.png"}/>
                <Icon img={"/Icons/Php.png"}/>
              </div>
              
              <div className="my-8 text-3xl"> Front-End </div>

              <div className="flex flex-row justify-center space-x-6">
                <Icon img={"/Icons/React.png"}/>
                <Icon img={"/Icons/TypeScript.png"}/>
                <Icon img={"/Icons/JavaScript.png"}/>
                <Icon img={"/Icons/Html.png"}/>
                <Icon img={"/Icons/Css.png"}/>
                <Icon img={"/Icons/Sass.png"}/>
                <Icon img={"/Icons/Tailwind.png"}/>
                <Icon img={"/Icons/Flutter.png"}/>
              </div>
              
              <div className="my-8 text-3xl"> Back-End </div>

              <div className="flex flex-row justify-center space-x-6">
                <Icon img={"/Icons/Java.png"}/>
                <Icon img={"/Icons/MySql.png"} bgColor={"bg-white"}/>
                <Icon img={"/Icons/Nextjs.png"}/>
              </div>
              
              <div className="my-8 text-3xl">Dev Tools</div>
              <div className="flex flex-row justify-center space-x-6">
                <Icon img={"/Icons/Visual.png"}/>
                <Icon img={"/Icons/Git.png"}/>
                <Icon img={"/Icons/VsCode.png"}/>
                <Icon img={"/Icons/Docker.png"}/>
              </div>
            </div>


      </div>
    </Wrapper>
  );
}
