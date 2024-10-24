import { User, columns } from "./column";
import { DataTable } from "@/components/data-table";

export default async function DemoPage() {
  const apiKey = process.env.MOCKAROO_API_KEY;
  const res = await fetch(
    `https://my.api.mockaroo.com/users.json?key=${apiKey}&format=json&resetCache=true`
  );
  const customers: any = await res.json();

  return (
    <div className="container mx-auto lg:py-10 p-6">
      <DataTable columns={columns} data={customers} />
    </div>
  );
}
