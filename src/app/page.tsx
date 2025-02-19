import type { NotificationType } from '@/app/lib/type-defs';
import SALES_DATA from '@/app/data/DATA';
import DataTable from "@/app/ui/data-table";
import Hero from "@/app/ui/hero";

const notifications: NotificationType[] = [
    { title: 'New Lead', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit' },
    { title: 'Update', message: 'Repellendus obcaecati magnam quod, ex a est fugit, deleniti cupiditate asperiores consequatur non' },
];

const SALES_COLUMNS = [
    { id: 'data_1', label: 'SKU per location' },
    { id: 'data_2', label: 'Current vs proposed forecast' },
    { id: 'data_3', label: 'Historic demand vs forecast demand' }
];

export default function Home() {
    return (
        <>
        <Hero title="Welcome" notifications={notifications} showDate={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, molestiae unde! Vel repellat rem debitis, ratione asperiores praesentium assumenda.
        </Hero>

        <DataTable columns={SALES_COLUMNS} data={SALES_DATA} title="Orders" />

        <DataTable columns={SALES_COLUMNS} data={SALES_DATA} title="Past Orders" />
        </>
    );
}