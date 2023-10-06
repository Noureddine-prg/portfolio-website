"use client";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";

export default function Wrapper(props: any) {
  return (
    <div className="flex justify-center w-screen h-screen p-0 sm:p-8 bg-[var(--wrapper)] relative">
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        }}
        className={`hide-scrollbar border-black border-2 flex flex-col w-full h-full overflow-y-auto rounded-3xl p-0 sm:pl-20 sm:pr-20 sm:pt-10 ${props.bgColor}`}
      >
        <div className="hide-scrollbar flex-1 overflow-y-auto">
          <Navbar />
          {props.children}
          {props.navbar}
          <Footer />
        </div>
      </div>
    </div>
  );
}
