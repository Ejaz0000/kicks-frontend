'use client';

import Link from 'next/link';
import { Search, User, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAppSelector } from '@/store/hooks';
import { getTotalQuantity } from '@/store/slices/cartSlice';
import Container from './Container';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalQuantity = useAppSelector(getTotalQuantity);

  return (
    <header className="sticky top-0 z-50 w-full">
      <Container className="mt-4">
        <nav className="bg-gray-100 rounded-full px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="flex items-center gap-1 text-sm font-medium hover:text-gray-600">
                New Drops <span>🔥</span>
              </Link>
              <Link href="/" className="flex items-center gap-1 text-sm font-medium hover:text-gray-600">
                Men <ChevronDown className="w-3 h-3" />
              </Link>
              <Link href="/" className="flex items-center gap-1 text-sm font-medium hover:text-gray-600">
                Women <ChevronDown className="w-3 h-3" />
              </Link>
            </div>

            <Link href="/" className="text-2xl font-bold tracking-tight absolute left-1/2 -translate-x-1/2">
              KICKS
            </Link>

            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200">
                <User className="w-5 h-5" />
              </button>
              <Link href="/cart" className="relative p-2 hover:bg-gray-200 rounded-full transition-colors duration-200">
                <ShoppingBag className="w-5 h-5" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white font-semibold">
                    {totalQuantity}
                  </span>
                )}
              </Link>
              <button 
                className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200 md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {mobileOpen && (
            <div className="md:hidden mt-4 pb-2 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-3">
                <Link href="/" className="flex items-center gap-1 text-sm font-medium" onClick={() => setMobileOpen(false)}>
                  New Drops <span>🔥</span>
                </Link>
                <Link href="/" className="flex items-center gap-1 text-sm font-medium" onClick={() => setMobileOpen(false)}>
                  Men <ChevronDown className="w-3 h-3" />
                </Link>
                <Link href="/" className="flex items-center gap-1 text-sm font-medium" onClick={() => setMobileOpen(false)}>
                  Women <ChevronDown className="w-3 h-3" />
                </Link>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}
