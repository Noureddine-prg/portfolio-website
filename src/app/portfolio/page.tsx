"use client";

import Icon from "@components/components/Icon/icon";
import Wrapper from "@components/components/Wrapper";
import { useState } from "react";

export default function Portfolio() {
  const [projectNumber, setProjectNumber] = useState(0);

  const projects = [
    {
      name: "Laundry Website",
      description:
        "Developed an application using Next.js, integrating enhanced load performance, animated elements, and a responsive design through Tailwind CSS for a professional-grade front-end user experience.",
      technologies: ["React.png", "React.png", "React.png"],
      image: "",
      projectLink:
        "https://cleaning-website-git-client-ez-laundry-carlosfloresalex.vercel.app",
    },
    {
      name: "D.D Sparkle Cleaning",
      description:
        "Developed a performant and mobile-responsive application for D.D Sparkle Cleaning Company with Next.js, boosting bookings by 30%. The project leveraged modular React components from Figma designs and was delivered on schedule through effective agile practices.",
      technologies: ["React.png", "React.png", "React.png"],
      image: "",
      projectLink:
        "https://dd-sparkle-cleaning-3wzmrw6ss-carlosfloresalex.vercel.app",
    },
    {
      name: "Shoe Store Back-End",
      description:
        "Implemented a back-end for a shoe store web application using ASP.NET Razor Pages, with a focus on session management for personalized user experiences. Developed a cart system with optimized SQL queries for instant data retrieval, complemented by a collaborative effort in front-end design to elevate user engagement.",
      technologies: ["React.png", "React.png", "React.png"],
      image: "",
      projectLink: "",
    },
    {
      name: "Portfolio Website",
      description: "This is project 4 description",
      technologies: ["React.png", "React.png", "React.png"],
      image: "",
      projectLink: "",
    },
  ];

  const nextProject = () => {
    setProjectNumber((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setProjectNumber((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const { name, description, technologies, image, projectLink } =
    projects[projectNumber];

  return (
    <Wrapper bgColor="bg-[var(--portfolio)]">
      <div className="w-full flex flex-row mt-24">
        <div className="w-2/5 h-[650px] flex flex-col">
          <div className="flex flex-row">
            <div className="w-10 h-10 bg-white mr-6" />
            <text className="text-4xl">{projectNumber + 1} </text>
          </div>

          <div className="w-full mt-12">
            <text className="text-6xl font-bold">{name}</text>
          </div>

          <div className="w-full mt-10 pr-10">
            <text>{description}</text>
          </div>

          <div className="w-full mt-10">
            <text className="text-3xl font-bold"> Technologies Used: </text>
          </div>
        </div>

        <div className="w-3/5 h-[650px]  border-r-black">
          <div
            className="w-full h-[550px] bg-white"
            style={{
              boxShadow: "",
            }}
          >
            <img src={image} className="object-cover" />
          </div>

          <div className="flex flex-row pt-5">
            <div className="flex flex-row w-1/2 justify-between pr-56">
              <img
                src="/arrow.png"
                className="-scale-100 w-10 h-10 hover:cursor-pointer"
                onClick={prevProject}
              />
              <img
                src="/arrow.png"
                className="w-10 h-10 ml-5 hover:cursor-pointer"
                onClick={nextProject}
              />
            </div>

            <div className="w-1/2 flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => window.open(projectLink)}
              >
                View Case
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
