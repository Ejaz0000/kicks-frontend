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
    <section className="py-16">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            REVIEWS
          </h2>
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              SEE ALL
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-sm">{review.title}</h3>
                    <p className="text-xs text-gray-500">{review.text}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">5.0</span>
                </div>
              </div>
              <div className="aspect-[4/3] relative bg-gray-100">
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
