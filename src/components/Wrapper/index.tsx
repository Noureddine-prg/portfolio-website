export default function Wrapper(props: any) {
  return (
    <div className="flex justify-center w-screen h-screen p-8 bg-[#E9F6FC] relative">
      <div
        className={`flex flex-col w-full h-full overflow-y-auto rounded-3xl pl-20 pr-20 pt-10 ${props.bgColor}`}
      >

        <div className="flex-1 overflow-y-auto">
          {props.children}
          {props.navbar}
        </div>
      </div>
    </div>
  );
}
