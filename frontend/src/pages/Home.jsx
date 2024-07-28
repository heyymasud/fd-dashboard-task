import ProjectStatisctics from "../components/Layouts/Home/RevenueStatisctics";
import RevenueCard from "../components/Layouts/Home/RevenueCard";


const Home = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-3">
        <RevenueCard />
        <ProjectStatisctics />
      </div>
    </div>
  );
};

export default Home;
