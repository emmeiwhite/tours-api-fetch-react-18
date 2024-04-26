import Tour from "./Tour";

export default function TourList({ tours }) {
  const renderedTours = tours.map((tour) => (
    <Tour
      {...tour}
      key={tour.id}
    />
  ));

  return <div className="mt-12 tours-list">{renderedTours}</div>;
}
