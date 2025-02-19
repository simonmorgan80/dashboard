import type { NotificationType } from '@/app/lib/type-defs';

export default function Notification( { notification } :{ notification : NotificationType } ) {
    return (
        <div className="bg-white text-stone-800 border-b-blue-400 border-b-4 text-sm p-4 h-full min-h-[120px] md:min-h-[180px]">
            {notification.title ? <h1 className="text-2xl mb-2 tracking-wide">{notification.title}</h1> : null }
            {notification.message ? <div>{notification.message}</div> : null}
        </div>
    )
}