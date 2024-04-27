import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import Error from "./components/Error";
import TourList from "./components/TourList";

const url = "https://www.course-api.com/react-tours-project";

export default function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    setTours((prevTours) => {
      return prevTours.filter((tour) => tour.id !== id);
    });
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios(url);

      console.log(response.data);
      setTours(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response.data.msg);
      setError(error.response.data.msg);
      setIsLoading(false);
    }
  };

  useEffect(() => fetchData, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error msg={error} />;
  }

  return (
    <section className="bg-emerald-100 min-h-screen w-screen py-[64px]">
      <div className="container mx-auto ">
        <h1 className="text-[40px] text-[#0F172A] text-center">
          <span className="inline-block heading-text relative">Our Tours</span>
        </h1>

        {tours.length > 0 && (
          <TourList
            tours={tours}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </section>
  );
}
