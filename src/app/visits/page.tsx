import LineChart from "./line-chart";

const details = async () => {
  const apiKey = process.env.MOCKAROO_API_KEY;
  const res = await fetch(
    `https://my.api.mockaroo.com/statistics.json?key=${apiKey}&resetCache=true`
  );
  const statistics = await res.json();
  return (
    <div className="max-w-[90vw] md:max-w-[80vw] h-[calc(100vh - 96px)] mt-1 container mx-auto">
      <h1 className="text-center text-2xl pt-6">Detailed Visit Analysis</h1>
      <p className="text-center text-xs text-gray-400 pb-6">
        Graph showing trends for website visits over the past 30 days
      </p>
      <LineChart statistics={statistics} />
    </div>
  );
};

export default details;
