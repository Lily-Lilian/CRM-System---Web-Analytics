import { DataTable } from "@/components/data-table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { columnsDashboard } from "./users/column";
import LineChart from "./details/line-chart";
import Link from "next/link";

const page = async() => {
  // const apiKey = '9fd29160'
  const apiKey = 'de3ba150'
  const res = await fetch(
    `https://my.api.mockaroo.com/statistics.json?key=${apiKey}&resetCache=true`
  );
  const res2 = await fetch(
    `https://my.api.mockaroo.com/users.json?key=${apiKey}&format=json&resetCache=true`
  );
  const statistics = await res.json();
  const customers: any = await res2.json();

  const totalVisitors = statistics.reduce((sum:any, stat:any) => sum + stat.unique_visitors, 0);
  const totalBounceRate = statistics.reduce((sum:any, stat:any) => sum + (stat.bounce_rate * stat.unique_visitors), 0)/totalVisitors;
  const averageSessionDuration = statistics.reduce((sum:any, stat:any) => sum + (stat.avg_session_duration * stat.unique_visitors), 0)/totalVisitors;

  return (
    <div>
      <div className="flex gap-10 ml-40 justify-start p-10">
        <Card>
          <CardHeader>
            <CardTitle>Total Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{totalVisitors.toLocaleString('en-US')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bounce Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{totalBounceRate.toFixed(2)} <span className="text-sm font-normal">%</span></p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Session Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{averageSessionDuration.toFixed(2).toLocaleString()} <span className="text-sm font-normal">seconds</span></p>
            <p className="text-xs font-normal text-gray-500">about {Math.round(averageSessionDuration/60)} minutes</p>
          </CardContent>
        </Card>
      </div>

      <div className="container mx-auto gap-10 flex">
        <div className="container mx-auto">
          <p className="text-xl text-center pb-4">Overview</p>
          <LineChart statistics={statistics.slice(0, 5)} />
          <div className="text-center pt-4">
            <Link href="/details" className="bg-cyan-500 rounded-md text-white py-2 px-3">View more</Link>
          </div>
        </div>
        <div className="container mx-auto">
        <p className="text-xl text-center pb-4">Visitors</p>
          <DataTable columns={columnsDashboard} data={customers.slice(0, 5)} hideFilters />
          <div className="text-center pt-4">
            <Link href="/users" className="bg-cyan-500 rounded-md text-white py-2 px-3">View more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
