import Hero from "@/app/ui/hero";
import type { NotificationType } from '@/app/ui/notification';

const notifications: NotificationType[] = [
    { title: 'New Lead', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit' },
    { title: 'Update', message: 'Repellendus obcaecati magnam quod, ex a est fugit, deleniti cupiditate asperiores consequatur non' },
];

export default function Home() {
    return (
        <>
        <Hero title="Welcome" notifications={notifications} showDate={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, molestiae unde! Vel repellat rem debitis, ratione asperiores praesentium assumenda.
        </Hero>
        </>
    );
}