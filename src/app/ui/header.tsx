'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Dashboard', href: '/' },
    { name: 'Orders', href: '/orders' },
];

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="bg-blue-900 text-white py-2 md:py-4">
            <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-2">

                <div className="">
                    <Link href="/" className="text-2xl lg:text-3xl font-light">
                        <span className="block bg-white hover:bg-white/50 rounded-full w-8 h-8 "></span>
                    </Link>
                </div>

                <div className="flex flex-row gap-4 lg:gap-8 lg:justify-end">
                    {links.map((link) => {
                        return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'text-sm tracking-wider underline-offset-4 py-2 hover:underline',
                                {
                                    'underline': pathname === link.href,
                                },
                            )}
                        >
                            {link.name}
                        </Link>
                        );
                    })}
                </div>

            </div>
        </header>
    )
}