"use client";

import LandingCard from "@components/components/LandingCards/landingCard";
import GreetingCard from "@components/components/LandingCards/greetingCard";
import useCardAnimation from "../hooks/useCardAnimation";

export default function Home() {
  const { clicked, cardsFadedOut, activeCard, handleCardClick, expandCard } =
    useCardAnimation();

  return (
    <div className=" flex justify-center w-screen h-screen p-8 bg-[#E9F6FC]">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-9 w-full h-full auto-rows-fr max-h-screen relative">
        <GreetingCard
          customColor={`bg-white`}
          bigPicture="/japanBG.png"
          userIcon="/sky.png"
          cardsFadedOut={cardsFadedOut}
          activeCard={activeCard}
        />

        {/* About Card */}
        <LandingCard
          customColor="bg-[#0B628E]"
          pageRoute="/about"
          cardText="About"
          icon="/Icons/person.svg"
          hiddenText="Professional Background and Skillset"
          cardsFadedOut={cardsFadedOut}
          activeCard={activeCard}
          handleCardClick={handleCardClick}
          expandCard={expandCard}
        />

        {/* Portfolio Card */}
        <LandingCard
          customColor="bg-[#9C1B20]"
          pageRoute="/portfolio"
          cardText="Portfolio"
          width="col-span-2"
          icon="/Icons/journals.svg"
          hiddenText="Come check out what I've done"
          cardsFadedOut={cardsFadedOut}
          activeCard={activeCard}
          handleCardClick={handleCardClick}
          expandCard={expandCard}
        />

        {/* Contact Card */}
        <LandingCard
          customColor="bg-[#9C1B20]"
          pageRoute="/contact"
          cardText="Contact"
          icon="/Icons/telephone.png"
          hiddenText="Let's get in touch."
          cardsFadedOut={cardsFadedOut}
          activeCard={activeCard}
          handleCardClick={handleCardClick}
          expandCard={expandCard}
        />
      </div>
    </div>
  );
}
