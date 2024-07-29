import ProjectStatisctics from "../components/Layouts/Home/RevenueStatisctics";
import RevenueCard from "../components/Layouts/Home/RevenueCard";
import { fetchRevenues } from "../services/revenue.service";
import { useEffect, useState } from "react";

const Home = () => {
  const [revenues, setRevenues] = useState([]);
  const fetchData = async () => {
    try {
      const data = await fetchRevenues();
      setRevenues(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-5">
      <div className="flex flex-col gap-3">
        <RevenueCard revenues={revenues} />
        <ProjectStatisctics revenues={revenues} />
      </div>
    </div>
  );
};

export default Home;
