import Link from 'next/link';
import Container from './Container';
import Navigation from './Navigation';
import CartBadge from './CartBadge';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            KICKS
          </Link>

          <Navigation className="hidden md:flex" />

          <div className="flex items-center gap-4">
            <CartBadge />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
