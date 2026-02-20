import Link from 'next/link';
import Container from './Container';
import { Facebook, Instagram, Twitter, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <Container>
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-bold text-lg mb-4">About us</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Runners</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Sneakers</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Basketball</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Outdoor</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Golf</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Hiking</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Blogs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow us</h4>
            <div className="flex items-center gap-4">
              <Link href="/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Music className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative overflow-hidden border-t border-white/10">
        <Container>
          <div className="relative py-8">
            <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-white/5 leading-none select-none block">
              KICKS
            </span>
          </div>
        </Container>
      </div>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-center text-sm text-gray-500">
            &copy; All rights reserved
          </p>
        </Container>
      </div>
    </footer>
  );
}
