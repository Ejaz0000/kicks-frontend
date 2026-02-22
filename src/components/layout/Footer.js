import Link from 'next/link';
import Container from './Container';
import Image from '@/components/common/Image';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 pb-4 md:pb-8">
      <Container>
        <div className="bg-(--dark-gray) text-white rounded-[24px] md:rounded-[48px] overflow-hidden relative -mt-8 md:-mt-12 z-20">
          <div className="pt-6 md:pt-10 pb-[112px] md:pb-[305px] px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 md:gap-10">
            
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-2xl md:text-4xl text-(--orange-primary) mb-2">About us</h3>
              <p className="text-base sub-text md:text-xl text-(--light-gray) leading-relaxed font-semibold max-w-[336px] md:max-w-[446px]">
                We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-(--orange-primary) mb-3">Categories</h4>
              <ul className="space-y-2 text-base md:text-xl font-semibold text-(--light-gray) sub-text">
                <li><Link href="/" className="hover:text-white transition-colors">Runners</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Sneakers</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Basketball</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Outdoor</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Golf</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Hiking</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-(--orange-primary) mb-3">Company</h4>
              <ul className="space-y-2 text-base md:text-xl font-semibold text-(--light-gray) sub-text">
                <li><Link href="/" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Blogs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-(--orange-primary) mb-3">Follow us</h4>
              <div className="flex items-center gap-4 md:gap-6">
                <Link href="/" className="text-(--light-gray) hover:text-white transition-colors">
                  <Facebook className="w-6 h-6 fill-current" />
                </Link>
                <Link href="/" className="text-(--light-gray) hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="/" className="text-(--light-gray) hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="/" className="text-(--light-gray) hover:text-white transition-colors">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                  </svg>
                </Link>
              </div>
            </div>

          </div>

          {/* Large Bottom Logo */}
          <div className='px-4 md:px-10'>
            <div className='relative w-full'>
              <div className="absolute bottom-0 left-0 right-0 w-full aspect-[358/89]  md:aspect-[1262/314] translate-y-[35%] pointer-events-none">
                <Image
                  src="/assets/footer-logo.png"
                  alt="KICKS"
                  width={1262}
                  height={314}
                  className="object-contain"
                />
              </div>
            </div>
            
          </div>
        </div>

        <div className="pt-6 md:pt-8">
          <p className="text-center text-sm md:text-base text-[#232321] font-medium">
            &copy; All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
