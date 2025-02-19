'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Dashboard', href: '/' },
    { name: 'Orders', href: '/orders' },
    { name: 'Terms', href: '/terms' }
];

export default function Footer() {
    const pathname = usePathname();
    return (
        <footer className="bg-blue-900 text-white py-2 md:py-4 mt-auto">
            <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-2">

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
        </footer>
    )
}