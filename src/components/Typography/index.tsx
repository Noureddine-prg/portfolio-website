export function CardTitle(props: any) {
  return (
    <h2 className="text-5xl font-semibold text-white">{props.children}</h2>
  );
}

export function Details(props: any) {
  return (
    <p className="text-base font-medium text-gray-500">{props.children}</p>
  );
}

export function BodyText(props: any) {
  return (
    <p className="md:text-lg text-sm font-normal text-gray-500">
      {props.children}
    </p>
  );
}
