import { useEffect, useState } from "react";
import Loader from "./components/Loader";

const url = "https://www.course-api.com/react-tours-project";

export default function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {};

  useEffect(() => fetchData, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="bg-emerald-100 min-h-screen w-screen">
      <div className="container mx-auto ">
        <h1 className="text-[40px] text-[#0F172A] text-center pt-[64px]">
          <span className="inline-block heading-text relative">Our Tours</span>
        </h1>
      </div>
    </section>
  );
}
