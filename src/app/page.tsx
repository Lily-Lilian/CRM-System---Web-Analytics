import { DataTable } from "@/components/data-table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { columnsDashboard } from "./visitors/column";
import LineChart from "./visits/line-chart";
import Link from "next/link";

const Page = async () => {
  const apiKey = process.env.MOCKAROO_API_KEY;

  // Fetch statistics and customers data
  const res = await fetch(
    `https://my.api.mockaroo.com/statistics.json?key=${apiKey}&resetCache=true`
  );
  const res2 = await fetch(
    `https://my.api.mockaroo.com/users.json?key=${apiKey}&format=json&resetCache=true`
  );

  // Parse the responses
  const statistics = await res.json();
  const customers: any = await res2.json();

  let totalVisitors = 0;
  let totalBounceRate = 0;
  let averageSessionDuration = 0;

  if (Array.isArray(statistics)) {
    totalVisitors = statistics.reduce(
      (sum: number, stat: any) => sum + stat.unique_visitors,
      0
    );
    totalBounceRate =
      statistics.reduce(
        (sum: number, stat: any) =>
          sum + stat.bounce_rate * stat.unique_visitors,
        0
      ) / totalVisitors;
    averageSessionDuration =
      statistics.reduce(
        (sum: number, stat: any) =>
          sum + stat.avg_session_duration * stat.unique_visitors,
        0
      ) / totalVisitors;
  } else {
    console.error("Statistics data is not an array:", statistics);
    // Handle error case or fallback logic
  }

  return (
    <>
      <div className="flex max-w-screen-lg flex-wrap gap-4 justify-center lg:flex-nowrap lg:gap-10 lg:mx-auto p-10">
        <Card>
          <CardHeader>
            <CardTitle>Total Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{totalVisitors.toLocaleString("en-US")}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bounce Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {totalBounceRate.toFixed(2)}
              <span className="text-sm font-normal">%</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Session Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {parseFloat(averageSessionDuration.toFixed(2)).toLocaleString(
                "en-US"
              )}
              <span className="text-sm font-normal"> seconds</span>
            </p>
            <p className="text-xs font-normal text-gray-500">
              about {Math.round(averageSessionDuration / 60)} minutes
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="container mx-auto flex gap-6 flex-wrap justify-center p-4 lg:flex-nowrap lg:gap-10">
        {/* Analytics */}
        <div className="container mx-auto">
          <div className="flex justify-between items-center pb-4 lg:pb-0">
            <p className="text-xl text-center lg:flex-1 lg:pb-4 p-0">
              Overview
            </p>
            <div className="visible lg:hidden">
              <Link
                href="/visits"
                className="bg-cyan-500 rounded-md text-white dark:text-black py-2 px-3"
              >
                View more
              </Link>
            </div>
          </div>
          <LineChart statistics={statistics.slice(0, 5)} />
          <div className="text-center pt-4 invisible lg:visible">
            <Link
              href="/visits"
              className="bg-cyan-500 rounded-md text-white dark:text-black py-2 px-3"
            >
              View more
            </Link>
          </div>
        </div>

        {/* Visitors */}
        <div className="container mx-auto">
          <div className="flex justify-between items-center pb-4 lg:pb-0">
            <p className="text-xl text-center lg:pb-4 lg:flex-1">Visitors</p>
            <div className="visible lg:hidden">
              <Link
                href="/visits"
                className="bg-cyan-500 rounded-md text-white dark:text-black py-2 px-3"
              >
                View more
              </Link>
            </div>
          </div>
          <DataTable
            columns={columnsDashboard}
            data={customers.slice(0, 5)}
            hideFilters
          />
          <div className="text-center pt-4">
            <Link
              href="/visitors"
              className="bg-cyan-500 rounded-md text-white dark:text-black py-2 px-3 lg:visible invisible"
            >
              View more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
