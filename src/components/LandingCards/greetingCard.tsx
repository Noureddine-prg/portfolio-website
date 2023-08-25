import {
  Details,
  CardTitle,
  BodyText,
} from "@components/components/Typography";

interface IGreetingCard {
  bigPicture: string;
  userIcon: string;
}

export default function GreetingCard(props: IGreetingCard) {
  return (
    <>
      {/* Intro Card */}
      <div className="lg:col-span-2 bg-white rounded-3xl p-10 flex lg:flex-row flex-col-reverse lg:justify-end">
        {/* Left Content Container */}
        <div className="w-full lg:w-1/2 h-full pr-11 flex flex-col">
          <div className="flex flex-row items-center justify-center lg:justify-start">
            {/* Profile Image div */}
            <img
              src={props.userIcon}
              alt="Main Image"
              className="w-12 h-12 rounded-2xl object-cover object-center mr-[7px] border"
            />
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

        <img
          src={props.bigPicture}
          className="w-full lg:w-1/2 h-full object-cover"
        />
      </div>
    </>
  );
}
