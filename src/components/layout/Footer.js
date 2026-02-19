import Link from 'next/link';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container>
        <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">KICKS</h3>
            <p className="text-sm text-gray-500">Your destination for premium sneakers.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/">New Drops</Link></li>
              <li><Link href="/">Men</Link></li>
              <li><Link href="/">Women</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/">FAQ</Link></li>
              <li><Link href="/">Shipping</Link></li>
              <li><Link href="/">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/">About</Link></li>
              <li><Link href="/">Contact</Link></li>
              <li><Link href="/">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} KICKS. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
