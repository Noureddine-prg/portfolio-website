"use client";

import Icon from "@components/components/Icon/icon";
import Wrapper from "@components/components/Wrapper";
import { useState } from "react";

export default function Portfolio() {
  const [projectNumber, setProjectNumber] = useState(0);

  return (
    <Wrapper bgColor="bg-[var(--portfolio)]">
      <div className="w-full flex flex-row mt-24">
        <div className="w-2/5 h-[750px] flex flex-col">
          <div className="flex flex-row">
            <div className="w-10 h-10 bg-white mr-6" />
            <text className="text-4xl"> Project 1 </text>
          </div>

          <div className="w-full mt-12">
            <text className="text-7xl font-bold">[Project Name]</text>
          </div>

          <div className="w-full mt-12 p-2">
            <text>
              [Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
              Adipiscing elit ipsum dolor sit.]
            </text>
          </div>

          <div className="w-full mt-16">
            <text className="text-3xl font-bold"> Technologies Used: </text>
          </div>
        </div>

        <div className="w-3/5 h-[750px]  border-r-black">
          <div className="w-full h-[500px] bg-white"></div>
          <div className="flex justify-end"></div>
        </div>
      </div>
    </Wrapper>
  );
}
