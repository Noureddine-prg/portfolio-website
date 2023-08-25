import { CardTitle } from "@components/components/Typography";
import Line from "@widgets/widgets/horizontalLine";
import Link from "next/link";

interface ILandingCard {
  customColor: string;
  pageRoute: string;
  cardText: string;
  width?: string;
  icon?: string;
  hiddenText?: string;
}

export default function LandingCard(props: ILandingCard) {
  return (
    <Link
      className={`${props.customColor} lg:${props.width} p-4 rounded-3xl flex flex-col relative`}
      href={`${props.pageRoute}`}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px]">
        <img src={props.icon} alt="Icon" className="" />
      </div>

      <div className="mt-auto pb-10">
        <CardTitle>{props.cardText}</CardTitle>
        <Line />
      </div>
    </Link>
  );
}
