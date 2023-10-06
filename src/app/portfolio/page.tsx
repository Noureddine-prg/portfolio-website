"use client"

import Navbar from "@components/components/Navbar/Navbar";
import Wrapper from "@components/components/Wrapper"

export default function Portfolio() {
  return(
  <Wrapper bgColor="bg-[var(--portfolio)]">
    
    <Navbar/>

    <div className="w-full h-full flex flex-row">

      <div className="w-2/5 h-screen bg-white">

      </div>

      <div className="w-3/5 h-screen bg-green-50 border-r-black">
        
      </div>

    </div>
  
    

  </Wrapper>);
}
