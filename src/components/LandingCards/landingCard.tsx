"use client";

import { CardTitle } from "@components/components/Typography";
import Line from "@widgets/widgets/horizontalLine";
import { motion } from "framer-motion";
import useCardAnimation from "@components/hooks/useCardAnimation";

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
  expandCard?: boolean;
}

export default function LandingCard(props: ILandingCard) {
  const { clicked, cardsFadedOut, activeCard, handleCardClick, expandCard } =
    useCardAnimation();

  const cardVariants = {
    initial: {
      opacity:
        props.cardsFadedOut && props.activeCard !== props.cardText ? 0 : 1,
      width: "initial",
      height: "initial",
    },
    expanded: {
      opacity: 1,
      width: "100%",
      height: "100%",
    },
  };

  const iconVariants = {
    initial: { opacity: 1 },
    expanded: { opacity: 0 },
    hovered: { opacity: 1 },
  };

  const hiddenTextVariants = {
    initial: { opacity: 0, maxHeight: 0 },
    expanded: { opacity: 0, maxHeight: 0 },
    hovered: { opacity: 1, maxHeight: "100px" },
  };

  const isCardActive = props.expandCard && props.activeCard === props.cardText;

  const cardClasses = [
    "group",
    props.customColor,
    "shadow-custom",
    "rounded-3xl",
    "flex",
    "flex-col",
    "transition-transform",
    "transform",
    "z-1",
    "transition-all",
    "duration-500",
    props.cardsFadedOut && props.activeCard !== props.cardText
      ? "opacity-0"
      : "",
    isCardActive ? "absolute right-0 bottom-0" : `lg:${props.width} p-4`,
  ].join(" ");

  const iconClasses = [
    "absolute",
    "top-1/2",
    "left-1/2",
    "transform",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "w-[80px]",
    "h-[80px]",
    isCardActive ? "opacity-0 transition-all" : "",
  ].join(" ");

  return (
    <motion.a
      initial="initial"
      animate={isCardActive ? "expanded" : "initial"}
      whileHover="hovered"
      className={cardClasses}
      onClick={() => props.handleCardClick(props.cardText, props.pageRoute)}
      variants={cardVariants}
    >
      <motion.div className={iconClasses} variants={iconVariants}>
        <img src={props.icon} alt="Icon" />
      </motion.div>

      <div className="mt-auto pb-10 z-2">
        <CardTitle>{isCardActive ? "" : props.cardText}</CardTitle>

        <motion.div
          className="ml-.05 text-2xl overflow-hidden transition-all"
          variants={hiddenTextVariants}
        >
          {isCardActive ? "" : props.hiddenText}
        </motion.div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={isCardActive ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <Line />
        </motion.div>
      </div>
    </motion.a>
  );
}
