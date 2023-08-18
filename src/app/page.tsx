import {
  Details,
  CardTitle,
  BodyText,
} from "@components/components/Typography";
import Line from "@widgets/widgets/horizontalLine";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex justify-center w-screen h-screen p-8 bg-gradient-to-r from-[#9C1B20] via-[#B6202B] to-[#CD3439]">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-9 w-full h-full max-w-[1440px] max-h-screen">
        {/* Greeting Card */}

        <div className="lg:col-span-2 bg-white rounded-3xl p-10 flex lg:flex-row flex-col-reverse lg:justify-end ">
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
              <div className="h-1 w-full bg-black mt-5  flex" />;
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-full"></div>
        </div>

        {/* About Card */}

        <Link
          className="bg-[url('/aboutImage.png')] bg-cover bg-center p-4 rounded-3xl flex flex-col hover:opacity-75 "
          href="/about"
        >
          <div className="mt-auto">
            <CardTitle> About </CardTitle>
            <Line />
          </div>
        </Link>

        {/* Row 2 */}

        {/* Portfolio Card */}
        <Link
          href="/portfolio"
          className="bg-[url('/portfolioImage.png')] lg:col-span-2 p-4 rounded-3xl flex flex-col bg-cover bg-center hover:opacity-75  max-h-[456px]"
        >
          <div className="mt-auto">
            <CardTitle>Portfolio</CardTitle>
            <Line />
          </div>
        </Link>

        {/* Contact Card */}
        <Link
          href="/contact"
          className="bg-[url('/contactImage.png')]  bg-cover bg-center p-4 rounded-3xl flex flex-col hover:opacity-75 max-h-[456px]"
        >
          <div className="mt-auto">
            <CardTitle>Contact</CardTitle>
            <Line />
          </div>
        </Link>
      </div>
    </div>
  );
}
