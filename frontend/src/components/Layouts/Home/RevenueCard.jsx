import { GiProfit } from "react-icons/gi";

const RevenueCard = () => {
  return (
    <div className="px-5 bg-white rounded-xl">
      <h1 className="text-2xl font-bold text-gray-700">Revenue</h1>
      <div className="p-2 grid sm:grid-cols-3 xl:grid-cols-6 gap-2 overflow-auto xl:h-auto h-20">
        <div className="space-y-1 text-gray-500">
          <p className="flex items-center space-x-2">
            <GiProfit /> <span>January</span>
          </p>
          <h1 className="text-2xl font-bold border-b-2">Rp. 30.000</h1>
        </div>
        <div className="space-y-1 text-gray-500">
          <p className="flex items-center space-x-2">
            <GiProfit /> <span>February</span>
          </p>
          <h1 className="text-2xl font-bold border-b-2">Rp. 40.000</h1>
        </div>
        <div className="space-y-1 text-gray-500">
          <p className="flex items-center space-x-2">
            <GiProfit /> <span>March</span>
          </p>
          <h1 className="text-2xl font-bold border-b-2">Rp. 25.000</h1>
        </div>
        <div className="space-y-1 text-gray-500">
          <p className="flex items-center space-x-2">
            <GiProfit /> <span>April</span>
          </p>
          <h1 className="text-2xl font-bold border-b-2">Rp. 50.000</h1>
        </div>
        <div className="space-y-1 text-gray-500">
          <p className="flex items-center space-x-2">
            <GiProfit /> <span>May</span>
          </p>
          <h1 className="text-2xl font-bold border-b-2">Rp. 49.000</h1>
        </div>
        <div className="space-y-1 text-gray-500">
          <p className="flex items-center space-x-2">
            <GiProfit /> <span>June</span>
          </p>
          <h1 className="text-2xl font-bold border-b-2">Rp. 21.000</h1>
        </div>
        <div className="space-y-1 text-gray-500">
          <p className="flex items-center space-x-2">
            <GiProfit /> <span>July</span>
          </p>
          <h1 className="text-2xl font-bold border-b-2">Rp. 70.000</h1>
        </div>
        <div className="space-y-1 text-gray-500">
          <p className="flex items-center space-x-2">
            <GiProfit /> <span>August</span>
          </p>
          <h1 className="text-2xl font-bold border-b-2">Rp. 51.000</h1>
        </div>
        <div className="space-y-1 text-gray-500">
          <p className="flex items-center space-x-2">
            <GiProfit /> <span>September</span>
          </p>
          <h1 className="text-2xl font-bold border-b-2">Rp. 20.000</h1>
        </div>
        <div className="space-y-1 text-gray-500">
          <p className="flex items-center space-x-2">
            <GiProfit /> <span>October</span>
          </p>
          <h1 className="text-2xl font-bold border-b-2">Rp. 30.000</h1>
        </div>
        <div className="space-y-1 text-gray-500">
          <p className="flex items-center space-x-2">
            <GiProfit /> <span>November</span>
          </p>
          <h1 className="text-2xl font-bold border-b-2">Rp. 40.000</h1>
        </div>
        <div className="space-y-1 text-gray-500">
          <p className="flex items-center space-x-2">
            <GiProfit /> <span>December</span>
          </p>
          <h1 className="text-2xl font-bold border-b-2">Rp. 25.000</h1>
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;
