import Link from 'next/link';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'New Drops' },
  { href: '/', label: 'Men' },
  { href: '/', label: 'Women' },
];

export default function Navigation({ className }) {
  return (
    <nav className={cn('items-center gap-6', className)}>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
