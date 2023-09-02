"use client";

import { useState } from "react";

interface UseCardAnimationReturn {
  clicked: boolean;
  cardsFadedOut: boolean;
  activeCard: string | null;
  expandCard: boolean;
  handleCardClick: (cardName: string, route: string) => void;
}
const useCardAnimation = (): UseCardAnimationReturn => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [cardsFadedOut, setCardsFadedOut] = useState<boolean>(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [expandCard, setExpandCard] = useState<boolean>(false);

  const handleCardClick = async (cardName: string, route: string) => {
    if (!clicked) {
      //Stores clicked card
      setActiveCard(cardName);
      setClicked(true);

      //Other cards fade out
      setCardsFadedOut(true);

      //Card expands
      setExpandCard(true);

      //Timer before going to selected page
      setTimeout(() => {
        window.location.href = route;
      }, 5000);

      window.location.href = route;
    }
  };

  return {
    clicked,
    cardsFadedOut,
    activeCard,
    handleCardClick,
    expandCard,
  };
};

export default useCardAnimation;
