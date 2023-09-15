import Wrapper from "@components/components/Wrapper";
import { CardTitle } from "@components/components/Typography";
import Navbar from "@components/components/Navbar/Navbar";

export default function About() {
  return (
    <Wrapper bgColor="bg-[#054244]">

      <Navbar/>

      {/* Bio Section */}
      <div className="flex flex-row w-full h-screen">
        {/* Left Side */}
        <div className="w-1/2 flex flex-col ">
          <span className="font-bold text-4xl"> Hi, nice to meet you. </span>
          <span className="font-bold text-7xl"> I’m Noureddine! </span>
          <div>
            <h1 className=" max-w-[650px] mt-10 ">
              Throughout my time at New York City College of Technology, I explored the world
              of software development with an excitement that led me beyond
              class assignments. This journey took me from academic pursuits to
              real-world applications, leading me to contribute to diverse
              software projects, spanning individual initiatives to
              collaborative team challenges.
              <div className="mt-6" />
              Currently, my expertise lies in <b>front-end</b> technologies like{" "}
              <b> React.js, React native, and Flutter, </b>complemented by
              backend prowess in tools such as SQL Database and MongoDB.
              <br />
              <div className="mt-6" />
              Outside formal work, I've been mastering agile project management,
              which I believe is instrumental in today’s dynamic tech landscape.
            </h1>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-1/2 flex flex-col items-end">
          <div className="w-[460px] h-[550px] bg-white rounded-3xl"/>
        </div>
      </div>

      {/* Skill section */}
      <div className="w-full h-full #0B628E"></div>
    </Wrapper>
  );
}
