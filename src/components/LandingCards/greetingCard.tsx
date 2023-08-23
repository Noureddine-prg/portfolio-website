import {
  Details,
  CardTitle,
  BodyText,
} from "@components/components/Typography";

export default function GreetingCard() {
  return (
    <>
      {/* Intro Card */}
      <div className="lg:col-span-2 bg-white rounded-3xl p-10 flex lg:flex-row flex-col-reverse lg:justify-end">
        {/* Left Content Container */}
        <div className="w-full lg:w-1/2 h-full pr-11 flex flex-col">
          <div className="flex flex-row items-center justify-center lg:justify-start">
            {/* Profile Image div */}
            <div className="w-10 h-10 bg-[url('/aboutImage.png')] bg-cover bg-center mr-[7px] border"></div>
            <div className="flex flex-col align-bottom">
              <Details>Noureddine Sidi Abed</Details>
              <BodyText>Full Stack Software Developer</BodyText>
            </div>
          </div>

          <div className="mt-auto flex flex-col">
            <Details>
              Full-Stack Software Developer based in Brooklyn, New York
            </Details>
            <div className="h-1 w-full bg-black mt-5 flex" />;
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-full"></div>
      </div>
    </>
  );
}
