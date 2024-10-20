import LineChart from "./line-chart"

const details = async() => {
  const apiKey = '9fd29160'
  const res = await fetch(
    `https://my.api.mockaroo.com/statistics.json?key=${apiKey}&resetCache=true`
  );
  const statistics = await res.json();
  return (
    <div>
      <LineChart statistics={statistics} />
    </div>
  )
}

export default details
