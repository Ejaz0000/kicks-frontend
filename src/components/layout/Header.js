'use client';

import Link from 'next/link';
import { Search, User, ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAppSelector } from '@/store/hooks';
import { getTotalQuantity } from '@/store/slices/cartSlice';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Container from './Container';
import Image from '../common/Image';

const DROPDOWN_ITEMS = {
  Men: [
    { name: 'New Arrivals', href: '/men/new' },
    { name: 'Best Sellers', href: '/men/best-sellers' },
    { name: 'Shoes', href: '/men/shoes' },
    { name: 'Clothing', href: '/men/clothing' },
  ],
  Women: [
    { name: 'New Arrivals', href: '/women/new' },
    { name: 'Best Sellers', href: '/women/best-sellers' },
    { name: 'Shoes', href: '/women/shoes' },
    { name: 'Clothing', href: '/women/clothing' },
  ],
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const totalQuantity = useAppSelector(getTotalQuantity);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full px-4 md:px-8 py-4 md:py-6">
      <Container>
        <div className="bg-white rounded-[12px] md:rounded-[24px] px-6 md:px-8 h-[52px] md:h-[96px] w-full flex items-center justify-between relative">
        
        {/* Mobile Menu Button (Left) */}
        <button 
          className="lg:hidden p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="w-5 h-5 text-(--dark-gray)" />
        </button>

        {/* Desktop Navigation (Left) */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/new-drops" className="flex items-center gap-1.5 text-base font-bold text-(--dark-gray) tracking-tight hover:opacity-70 transition-opacity">
            New Drops <span className="text-lg">🔥</span>
          </Link>
          
          {/* Men Dropdown */}
          <div 
            className="relative group h-full flex items-center"
            onMouseEnter={() => setActiveDropdown('Men')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
             <button className="flex items-center gap-1 text-base font-bold text-(--dark-gray) tracking-tight hover:opacity-70 transition-opacity uppercase">
              Men
              <div className={`transition-transform duration-200 ${activeDropdown === 'Men' ? "rotate-180" : ""}`}>
                <svg width="8" height="8" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.563477 0.0234375H7.11621C7.57661 0.0234375 7.82492 0.563357 7.52539 0.913086L4.24902 4.73633C4.19847 4.79525 4.13596 4.84254 4.06543 4.875C3.99479 4.90748 3.91759 4.9248 3.83984 4.9248C3.76224 4.92475 3.68574 4.90741 3.61523 4.875C3.5446 4.84252 3.48127 4.79535 3.43066 4.73633L0.155273 0.913086L0.104492 0.845703C-0.113992 0.498212 0.131881 0.0234375 0.563477 0.0234375Z" 
                        fill="#232321" 
                        stroke="#232321" 
                        stroke-width="0.046875"/>
                </svg>
              </div>
            </button>
            
            {/* Dropdown Content */}
            <div className={cn(
              "absolute top-full left-0 pt-4 w-48 opacity-0 invisible transition-all duration-200 transform translate-y-2",
              activeDropdown === 'Men' && "opacity-100 visible translate-y-0"
            )}>
              <div className="bg-white rounded-xl shadow-xl p-2 border border-gray-100 overflow-hidden">
                {DROPDOWN_ITEMS.Men.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Women Dropdown */}
          <div 
            className="relative group h-full flex items-center"
            onMouseEnter={() => setActiveDropdown('Women')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-base font-bold text-(--dark-gray) tracking-tight hover:opacity-70 transition-opacity uppercase">
              Women
              <div className={`transition-transform duration-200 ${activeDropdown === 'Women' ? "rotate-180" : ""}`}>
                <svg width="8" height="8" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.563477 0.0234375H7.11621C7.57661 0.0234375 7.82492 0.563357 7.52539 0.913086L4.24902 4.73633C4.19847 4.79525 4.13596 4.84254 4.06543 4.875C3.99479 4.90748 3.91759 4.9248 3.83984 4.9248C3.76224 4.92475 3.68574 4.90741 3.61523 4.875C3.5446 4.84252 3.48127 4.79535 3.43066 4.73633L0.155273 0.913086L0.104492 0.845703C-0.113992 0.498212 0.131881 0.0234375 0.563477 0.0234375Z" 
                        fill="#232321" 
                        stroke="#232321" 
                        stroke-width="0.046875"/>
                </svg>
              </div>
            </button>

            {/* Dropdown Content */}
            <div className={cn(
              "absolute top-full left-0 pt-4 w-48 opacity-0 invisible transition-all duration-200 transform translate-y-2",
              activeDropdown === 'Women' && "opacity-100 visible translate-y-0"
            )}>
              <div className="bg-white rounded-xl shadow-xl p-2 border border-gray-100 overflow-hidden">
                {DROPDOWN_ITEMS.Women.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Logo (Centered) */}
        <Link 
          href="/" 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
        
          <Image src="/assets/dark-logo.png" className="w-[80px] md:w-[128px] h-[20px] md:h-[32px] object-contain" alt="Kicks Logo" width={128} height={32} />
        </Link>

        {/* Right Icons */}
        <div className="flex items-center gap-3 md:gap-5">
          <button className="hidden md:flex p-2 hover:bg-gray-100 rounded-full transition-colors text-(--dark-gray)">
            <Search className="w-4 h-4 md:w-6 md:h-6 stroke-[2.5px]" />
          </button>
          
          <Link href="/profile" className="p-2 hover:bg-gray-100 rounded-full transition-colors text-(--dark-gray)">
            <User className="w-4 h-4 md:w-6 md:h-6 fill-black stroke-none" />
          </Link>
          
          <Link 
            href="/cart" 
            className="bg-[#FFA542] text-(--dark-gray) w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-[13px] hover:bg-[#FF9500] transition-colors shadow-sm relative"
          >
            {totalQuantity}
          </Link>
        </div>
      </div>
      </Container>

      {/* Mobile Side Drawer */}
      <div 
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity cursor-pointer" 
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer Panel */}
        <div 
          className={cn(
            "absolute top-0 left-0 w-[80%] max-w-[320px] h-full bg-white shadow-2xl p-6 transition-transform duration-300 ease-in-out transform flex flex-col",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Menu</h2>
            <button 
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-6 overflow-y-auto flex-1">
            <Link 
              href="/new-drops" 
              className="text-[18px] font-bold text-(--dark-gray) flex items-center justify-between"
            >
              New Drops <span>🔥</span>
            </Link>
            
            <div className="space-y-4">
              <h3 className="text-[18px] font-bold text-(--dark-gray) uppercase">Men</h3>
              <div className="pl-4 space-y-3 border-l-2 border-gray-100">
                {DROPDOWN_ITEMS.Men.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className="block text-gray-600 font-medium hover:text-black transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[18px] font-bold text-(--dark-gray) uppercase">Women</h3>
              <div className="pl-4 space-y-3 border-l-2 border-gray-100">
                {DROPDOWN_ITEMS.Women.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className="block text-gray-600 font-medium hover:text-black transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-auto pt-6 border-t border-gray-100">
             <Link 
              href="/account"
              className="flex items-center gap-3 text-[16px] font-bold text-(--dark-gray) p-3 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <User className="w-5 h-5" />
              My Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
