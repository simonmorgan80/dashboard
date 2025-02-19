import Notification from '@/app/ui/notification';
import type { NotificationType } from '@/lib/type-defs';

type HeroProps = {
    title?: string;
    children?: React.ReactNode;
    notifications?: NotificationType[];
    showDate?: boolean
}

export default function Hero( { title, children, notifications, showDate } : HeroProps ) {
    const date = new Date().toLocaleDateString();

    return (
        <div className="lg:min-h-[248px] bg-blue-900 text-white py-8">
            <div className="container mx-auto px-4">

                <div className="grid lg:grid-cols-12 gap-4 lg:gap-8">
                    <div className="lg:col-span-4">

                        <div className="text-sm tracking-wide pt-4">
                            {title ? <h1 className="text-3xl lg:text-5xl mb-4">{title}</h1> : null }
                            {showDate &&
                                <p className="mb-2">{date}</p>
                            }
                            {children}
                        </div>

                    </div>
                    <div className="lg:col-span-6 lg:col-start-7">
                        
                        {notifications &&
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-end mt-4 lg:mt-0">
                                {notifications.map((notification, index) => {
                                    return (
                                        <div key={index} className="flex-1">
                                            <Notification notification={notification} />
                                        </div>
                                    )
                                })}
                            </div>
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}