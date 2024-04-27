import Tour from "./Tour";

export default function TourList({ tours, handleDelete }) {
  const renderedTours = tours.map((tour) => (
    <Tour
      {...tour}
      key={tour.id}
      handleDelete={handleDelete}
    />
  ));

  return <div className="mt-12 tours-list">{renderedTours}</div>;
}
