"use client";

import Wrapper from "@components/components/Wrapper";
import { motion } from "framer-motion";
import Icon from "@components/components/Icon/icon";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeIn" } },
  };

  return (
    <Wrapper bgColor="bg-[var(--about)]">
      <motion.div
        className="flex flex-col md:flex-row w-full h-2.5/5"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-full md:w-1/2 h-full flex flex-col"
          variants={fadeIn}
        >
          <span className="font-bold text-4xl"> Hi, nice to meet you. </span>
          <span className="font-bold text-7xl pt-6"> I’m Noureddine! </span>
          <div className="text-xl">
            <h1 className=" max-w-[650px] mt-10 ">
              Throughout my time at New York City College of Technology, I
              explored the world of software development with an excitement that
              led me beyond class assignments. This journey took me from
              academic pursuits to real-world applications, leading me to
              contribute to diverse software projects, spanning individual
              initiatives to collaborative team challenges.
              <div className="mt-10" />
              Currently, my expertise lies in <b>front-end</b> technologies like{" "}
              <b> React.js, React native, and Flutter, </b>complemented by
              <b> back-end</b> prowess in{" "}
              <b> Java and tools such as mySQL and MongoDB. </b>
              <br />
              <div className="mt-10" />
              Outside formal work, I've been mastering agile project management,
              which I believe is instrumental in today’s dynamic tech landscape.
            </h1>
          </div>
        </motion.div>

        <motion.div
          className="w-full h-2/5 md:w-1/2 flex flex-col items-end"
          variants={fadeIn}
        >
          <img
            src="/me.png"
            alt="Main Image"
            className="w-[300px] md:w-[500px] h-[400px] md:h-[600px] rounded-3xl border-2 border-white"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Skill section */}
      <div className="flex flex-col md:flex-row mt-40 w-full h-2/5 border-white">
        {/* Right Side */}

        <div className="w-1/2"></div>

        {/* Right Side */}

        <div className="w-1/2 text-center">
          <text className="font-bold text-4xl md:text-5xl "> Skills </text>

          <div className="grid grid-cols-4 gap-y-5 mt-10 mx-32 items-center justify-items-center auto">
            <Icon language="React" img={"/Icons/React.png"} />
            <Icon language="Typescript" img={"/Icons/TypeScript.png"} />
            <Icon language="Javascript" img={"/Icons/JavaScript.png"} />
            <Icon language="Java" img={"/Icons/Java.png"} />
            <Icon language="Python" img={"/Icons/Python.png"} />
            <Icon language="C++" img={"/Icons/C++.png"} />
            <Icon language="Flutter" img={"/Icons/Flutter.png"} />
            <Icon language="HTML" img={"/Icons/Html.png"} />
            <Icon language="CSS" img={"/Icons/Css.png"} />
            <Icon
              language="MySQL"
              img={"/Icons/MySql.png"}
              bgColor={"bg-white"}
            />
            <Icon language="Next.js" img={"/Icons/Nextjs.png"} />
            <Icon language="Git" img={"/Icons/Git.png"} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
