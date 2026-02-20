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
    <section className="py-16 bg-neutral-900">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            CATEGORIES
          </h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES_DATA.map((cat) => (
            <Link 
              key={cat.id} 
              href={cat.href} 
              className="group relative rounded-3xl overflow-hidden bg-gray-100 aspect-[4/3] hover:scale-[1.02] transition-transform"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">
                  {cat.name.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </h3>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
