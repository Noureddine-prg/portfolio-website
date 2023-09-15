"use client";

import {
  Details,
  CardTitle,
  BodyText,
} from "@components/components/Typography";
import useCardAnimation from "../../hooks/useCardAnimation";

interface IGreetingCard {
  bigPicture: string;
  userIcon: string;
  customColor: string;
  cardsFadedOut: boolean;
  activeCard: string | null;
}

export default function GreetingCard(props: IGreetingCard) {
  const { clicked, cardsFadedOut, activeCard, handleCardClick } =
    useCardAnimation();

  return (
    <>
      {/* Intro Card */}
      <div
        className={`lg:col-span-2 border-2 border-black
        ${props.customColor} 
        ${
          (props.cardsFadedOut && props.activeCard !== "About") ||
          (props.cardsFadedOut && props.activeCard !== "Portfolio") ||
          (props.cardsFadedOut && props.activeCard !== "Contact")
            ? "opacity-0"
            : ""
        }
        rounded-3xl p-10 flex lg:flex-row flex-col-reverse lg:justify-end transition-opacity duration-1000 `}
      >
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
            <div className="h-1 w-full bg-black mt-5 flex" />
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
