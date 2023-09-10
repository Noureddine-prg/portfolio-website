import Wrapper from "@components/components/Wrapper";
import { CardTitle } from "@components/components/Typography";

export default function About() {
  return (
    <Wrapper bgColor="bg-[#0B628E]">
      {/* Bio Section */}
      <div className="flex flex-row w-full h-full">
        {/* Left Side */}
        <div className="w-4/6">
          <CardTitle> Hi, nice to meet you! </CardTitle>
          <CardTitle> I’m Noureddine </CardTitle>
          <h1>
            Throughout my time at New York City College, I explored the world of
            software development with an excitement that led me beyond class
            assignments. This journey took me from academic pursuits to
            real-world applications, leading me to contribute to diverse
            software projects, spanning individual initiatives to collaborative
            team challenges. Currently, my expertise lies in <b>front-end</b>{" "}
            technologies like
            <b> React.js, React native, and Flutter, </b>complemented by backend
            prowess in tools such as SQL Database and MongoDB. Outside formal
            work, I've been mastering agile project management, which I believe
            is instrumental in today’s dynamic tech landscape.
          </h1>
        </div>
        {/* Right Side */}
        <div className="w-2/6">
          <div className="h-full w-full bg-white rounded-3xl"></div>
        </div>
      </div>

      {/* Skill section */}
      <div className="w-full h-full #0B628E"></div>
    </Wrapper>
  );
}
