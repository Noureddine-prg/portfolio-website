"use client";

import { useState } from "react";

interface UseCardAnimationReturn {
  clicked: boolean;
  cardsFadedOut: boolean;
  activeCard: string | null;
  handleCardClick: (cardName: string, route: string) => void;
}
const useCardAnimation = (): UseCardAnimationReturn => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [cardsFadedOut, setCardsFadedOut] = useState<boolean>(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardClick = async (cardName: string, route: string) => {
    if (!clicked) {
      setActiveCard(cardName);
      setClicked(true);

      setCardsFadedOut(true);

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
  };
};

export default useCardAnimation;
