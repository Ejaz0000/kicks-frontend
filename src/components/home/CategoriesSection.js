import Link from 'next/link';
import Image from '@/components/common/Image';
import Container from '@/components/layout/Container';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const CATEGORIES_DATA = [
  { id: 1, name: 'LIFESTYLE SHOES', image: '/images/category-lifestyle.png', href: '/' },
  { id: 2, name: 'BASKETBALL SHOES', image: '/images/category-basketball.png', href: '/' },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-900">
      <Container>
        <div className="flex items-center justify-between gap-4 md:gap-0 mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight">
            CATEGORIES
          </h2>
          <div className="flex gap-3">
            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0">
              <ChevronLeft className="w-5 h-5 text-gray-200" />
            </button>
            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0">
              <ChevronRight className="w-5 h-5 text-gray-200" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES_DATA.map((cat) => (
            <Link 
              key={cat.id} 
              href={cat.href} 
              className="group relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] hover:shadow-lg transition-shadow duration-200"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-contain p-6"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <h3 className="text-black text-lg md:text-xl font-black leading-tight">
                  {cat.name}
                </h3>
                <div className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-black transition-colors duration-200">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
