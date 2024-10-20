import LineChart from "@/components/line-chart";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = () => {
  return (
    <div>
      <div className="flex gap-10 ml-40 justify-start p-10">
        <Card>
          <CardHeader>
            <CardTitle>Total visitors</CardTitle>
            <CardDescription>total number of the visitors</CardDescription>
          </CardHeader>
          <CardContent>
            <p>1,2000</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>bounce rate</CardTitle>
            <CardDescription>total bounce rate</CardDescription>
          </CardHeader>
          <CardContent>
            <p>1,2000</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Session duration.</CardTitle>
            <CardDescription>average session duration.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>1,2000</p>
          </CardContent>
        </Card>
      </div>
      <LineChart />
    </div>
  );
};

export default page;
