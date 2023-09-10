export default function Wrapper(props: any) {
  return (
    <div className="flex  justify-center w-screen h-screen p-8 bg-[#E9F6FC] relative">
      <div
        className={`w-full h-full overflow-y-auto rounded-3xl p-20 ${props.bgColor}`}
      >
        {props.children}
      </div>
    </div>
  );
}
