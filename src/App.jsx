import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import Error from "./components/Error";

const url = "https://www.course-api.com/react-tours-projectsss";

export default function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios(url);

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
    <section className="bg-emerald-100 min-h-screen w-screen">
      <div className="container mx-auto ">
        <h1 className="text-[40px] text-[#0F172A] text-center pt-[64px]">
          <span className="inline-block heading-text relative">Our Tours</span>

          {}
        </h1>
      </div>
    </section>
  );
}
