import { GiProfit } from "react-icons/gi";

const RevenueCard = ({ revenues }) => {
  return (
    <div className="px-5 bg-white rounded-xl">
      <h1 className="text-2xl font-bold text-gray-700">Revenue</h1>
      <div className="p-2 grid sm:grid-cols-3 xl:grid-cols-6 gap-2 overflow-auto xl:h-auto h-20">
        {revenues.map((revenue, index) => (
          <div key={index} className="space-y-1 text-gray-500">
            <p className="flex items-center space-x-2">
              <GiProfit /> <span>{revenue.month}</span>
            </p>
            <h1 className="text-2xl font-bold border-b-2">$ {revenue.total}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueCard;
