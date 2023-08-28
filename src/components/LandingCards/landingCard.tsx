"use client";

import { CardTitle } from "@components/components/Typography";
import Line from "@widgets/widgets/horizontalLine";
import Link from "next/link";
import { useState } from "react";
import useCardAnimation from "../../hooks/useCardAnimation";

interface ILandingCard {
  customColor: string;
  pageRoute: string;
  cardText: string;
  width?: string;
  icon?: string;
  hiddenText?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  cardsFadedOut: boolean;
  activeCard: string | null;
  handleCardClick: (cardName: string, route: string) => void;
}

export default function LandingCard(props: ILandingCard) {
  const { clicked, cardsFadedOut, activeCard, handleCardClick } =
    useCardAnimation();

  return (
    <Link
      className={`group ${props.customColor}  
      transition-opacity duration-1000 
      ${
        props.cardsFadedOut && props.activeCard !== props.cardText
          ? "opacity-0"
          : ""
      }
      hover:{bg-opacity-80 shadow-custom}  lg:${
        props.width
      } p-4 rounded-3xl flex flex-col relative transition-transform transform duration-300 z-1`}
      href={`${props.pageRoute}`}
      onClick={() => props.handleCardClick(props.cardText, props.pageRoute)}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px]">
        <img src={props.icon} alt="Icon" className="" />
      </div>

      <div className="mt-auto pb-10 z-2">
        <CardTitle>{props.cardText}</CardTitle>
        <div className="ml-.05 opacity-0 max-h-0 group-hover:opacity-100 text-2xl group-hover:max-h-[100px] transition-all duration-500 overflow-hidden z-2">
          {props.hiddenText}
        </div>
        <Line />
      </div>
    </Link>
  );
}
