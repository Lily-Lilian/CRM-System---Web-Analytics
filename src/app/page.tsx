import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const page = async() => {
  const apiKey = '9fd29160'
  const res = await fetch(
    `https://my.api.mockaroo.com/statistics.json?key=${apiKey}&resetCache=true`
  );
  const statistics = await res.json();
  
  const totalVisitors = statistics.reduce((sum:any, stat:any) => sum + stat.unique_visitors, 0);
  const totalBounceRate = statistics.reduce((sum:any, stat:any) => sum + (stat.bounce_rate * stat.unique_visitors), 0)/totalVisitors;
  const averageSessionDuration = statistics.reduce((sum:any, stat:any) => sum + (stat.avg_session_duration * stat.unique_visitors), 0)/totalVisitors;

  return (
    <div>
      <div className="flex gap-10 ml-40 justify-start p-10">
        <Card>
          <CardHeader>
            <CardTitle>Total visitors</CardTitle>
            <CardDescription>Total number of the visitors</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{totalVisitors}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>bounce rate</CardTitle>
            <CardDescription>Total bounce rate</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{totalBounceRate.toFixed(2)}%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Session duration.</CardTitle>
            <CardDescription>Total average session duration.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{averageSessionDuration.toFixed(2)}seconds (about {Math.round(averageSessionDuration/60)}minutes)</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
