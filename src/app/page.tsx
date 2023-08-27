import LandingCard from "@components/components/LandingCards/landingCard";
import GreetingCard from "@components/components/LandingCards/greetingCard";

export default function Home() {
  return (
    <div className=" flex justify-center w-screen h-screen p-8 bg-[#E9F6FC]">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-9 w-full h-full auto-rows-fr max-h-screen">
        <GreetingCard bigPicture="/japanBG.png" userIcon="/sky.png" />

        {/* About Card */}
        <LandingCard
          customColor="bg-[#054244]"
          pageRoute="/about"
          cardText="About"
          icon="/Icons/person.svg"
          hiddenText="Professional Background and Skillset"
        />

        {/* Portfolio Card */}
        <LandingCard
          customColor="bg-[#2568E9]"
          pageRoute="/portfolio"
          cardText="Portfolio"
          width="col-span-2"
          icon="/Icons/journals.svg"
          hiddenText="Come check out what I've done!"
        />

        {/* Contact Card */}
        <LandingCard
          customColor="bg-[#F24D31]"
          pageRoute="/contact"
          cardText="Contact"
          icon="/Icons/telephone.png"
          hiddenText="Let's get in touch."
        />
      </div>
    </div>
  );
}
