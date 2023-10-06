"use client";

import Wrapper from "@components/components/Wrapper";

export default function Portfolio() {
  return (
    <Wrapper bgColor="bg-[var(--portfolio)]">
      <div className="w-full h-2/5 flex flex-row">
        <div className="w-2/5 h-screen bg-white"></div>
        <div className="w-3/5 h-screen bg-green-50 border-r-black"></div>
      </div>
    </Wrapper>
  );
}
