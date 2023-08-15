import { Details, CardTitle } from "@components/components/Typography";
import Line from "@widgets/widgets/horizontalLine";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 w-screen h-screen p-8 bg-gradient-to-r from-[#9C1B20] via-[#B6202B] to-[#CD3439]">
      {/* Row 1*/}

      {/* Greeting Card */}
      <div className="lg:col-span-2 bg-white rounded-3xl p-10">
        <div>
          {/* Small bio container */}
          <div>
            {/* Image Container top left*/}
            <div></div>

            <div>
              <Details>Noureddine Sidi Abed</Details>
              <Details>Full-Stack Software Developer</Details>
            </div>
          </div>

          <Details>
            Full-Stack Software Developer based in Brooklyn, New York
          </Details>
        </div>
      </div>

      {/* About Card */}
      <Link
        className="bg-[url('/aboutImage.png')] p-4 rounded-3xl flex flex-col cursor-pointer bg-cover bg-center hover:opacity-75"
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
        className="bg-[url('/portfolioImage.png')] lg:col-span-2 p-4 rounded-3xl flex flex-col cursor-pointer bg-cover bg-center hover:opacity-75"
      >
        <div className="mt-auto">
          <CardTitle>Portfolio</CardTitle>
          <Line />
        </div>
      </Link>

      {/* Contact Card */}
      <Link
        href="/contact"
        className="bg-[url('/contactImage.png')] lg:bg-size-125 bg-cover bg-center p-4 rounded-3xl flex flex-col cursor-pointer hover:opacity-75"
      >
        <div className="mt-auto">
          <CardTitle>Contact</CardTitle>
          <Line />
        </div>
      </Link>
    </div>
  );
}
