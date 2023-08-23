import {
  Details,
  CardTitle,
  BodyText,
} from "@components/components/Typography";

import Line from "@widgets/widgets/horizontalLine";
import Link from "next/link";

interface ILandingCard {
  color: string;
  pageRoute: string;
  cardText: string;
  width?: string;
  icon?: string;
  hiddenText?: string;
}

export default function LandingCard(props: ILandingCard) {
  return (
    <>
      <Link
        className={`bg-[${props.color}] lg:${props.width} p-4 rounded-3xl flex flex-col hover:opacity-75`}
        href={`${props.pageRoute}`}
      >
        <div className="mt-auto pb-14">
          <CardTitle>{props.cardText}</CardTitle>
          <Line />
        </div>
      </Link>
    </>
  );
}
