"use client";

export default function Wrapper(props: any) {
  return (
    <div className="flex justify-center w-screen h-screen p-0 sm:p-8 bg-[#E9F6FC] relative">
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
        className={`hide-scrollbar border-black border-2 flex flex-col w-full h-full overflow-y-auto rounded-3xl p-0 sm:pl-20 sm:pr-20 sm:pt-10 ${props.bgColor}`}
      >
        <div className="hide-scrollbar flex-1 overflow-y-auto">
          {props.children}
          {props.navbar}
        </div>
      </div>
    </div>
  );
}
