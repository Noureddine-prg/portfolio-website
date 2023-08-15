import { Details, CardTitle } from "@components/components/Typography";
import Line from "@widgets/widgets/horizontalLine";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex justify-center w-screen h-screen p-8 bg-gradient-to-r from-[#9C1B20] via-[#B6202B] to-[#CD3439]">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-9 w-full h-full max-w-[1440px]">
        {/* Row 1*/}

        {/* Greeting Card */}

        <div className="lg:col-span-2 bg-white rounded-3xl p-10">
          {/* Left Content Container */}
          <div>
            <div className="h-1.5 w-full bg-black mt-5 mb-14"></div>;
          </div>

          {/* Right Image Container */}
          <div></div>
        </div>

        {/* About Card */}

        <Link
          className="bg-[url('/aboutImage.png')] bg-cover bg-center p-4 rounded-3xl flex flex-col hover:opacity-75"
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
          className="bg-[url('/portfolioImage.png')] lg:col-span-2 p-4 rounded-3xl flex flex-col bg-cover bg-center hover:opacity-75"
        >
          <div className="mt-auto">
            <CardTitle>Portfolio</CardTitle>
            <Line />
          </div>
        </Link>

        {/* Contact Card */}
        <Link
          href="/contact"
          className="bg-[url('/contactImage.png')]  bg-cover bg-center p-4 rounded-3xl flex flex-col hover:opacity-75"
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
