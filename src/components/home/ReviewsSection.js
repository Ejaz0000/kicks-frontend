import Link from 'next/link';
import Image from '@/components/common/Image';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { Star } from 'lucide-react';

const REVIEWS_DATA = [
  { 
    id: 1, 
    name: 'Alex M.', 
    avatar: '/images/avatar-1.png',
    rating: 5, 
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    image: '/images/review-1.png'
  },
  { 
    id: 2, 
    name: 'Sarah K.', 
    avatar: '/images/avatar-2.png',
    rating: 5, 
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    image: '/images/review-2.png'
  },
  { 
    id: 3, 
    name: 'James R.', 
    avatar: '/images/avatar-3.png',
    rating: 5, 
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    image: '/images/review-3.png'
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-100">
      <Container>
        <div className="flex items-center justify-between gap-4 md:gap-0 mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-900">
            REVIEWS
          </h2>
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded transition-colors duration-200 flex-shrink-0">
              SEE ALL
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-bold text-base md:text-lg text-gray-900 mb-1">{review.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{review.text}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative flex-shrink-0">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">5.0</span>
                </div>
              </div>
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src={review.image}
                  alt="Review"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
