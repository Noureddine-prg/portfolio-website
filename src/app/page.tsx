import LandingCard from "@components/components/LandingCards/landingCard";
import GreetingCard from "@components/components/LandingCards/greetingCard";

export default function Home() {
  return (
    <div className=" flex justify-center w-screen h-screen p-8 bg-[#E9F6FC]">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-9 w-full h-full auto-rows-fr max-h-screen">
        <GreetingCard />

        {/* About Card */}
        <LandingCard
          customColor="#054244"
          pageRoute="/about"
          cardText="About"
        />

        {/* Portfolio Card */}
        <LandingCard
          customColor="#2568E9"
          pageRoute="/portfolio"
          width="col-span-2"
          cardText="Portfolio"
        />

        {/* Contact Card */}
        <LandingCard
          customColor="#F24D31"
          pageRoute="/contact"
          cardText="Contact"
        />
      </div>
    </div>
  );
}
