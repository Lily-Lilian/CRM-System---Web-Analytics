import { User, columns } from "./column"
import { DataTable } from "@/components/data-table"

export default async function DemoPage() {
const res = await fetch('https://my.api.mockaroo.com/users.json?key=b9f8aa40&format=json&resetCache=true')
const customers: any = await res.json()

return (
<div className="container mx-auto py-10">
    <DataTable columns={columns} data={customers} />
</div>
)
}