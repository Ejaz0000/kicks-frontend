import Link from 'next/link';
import Image from '@/components/common/Image';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const REVIEWS_DATA = [
  { 
    id: 1, 
    name: 'Alex M.', 
    avatar: '/assets/avatar-1.jpg',
    rating: 5, 
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    image: '/assets/review-1.png'
  },
  { 
    id: 2, 
    name: 'Sarah K.', 
    avatar: '/assets/avatar-2.png',
    rating: 5, 
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    image: '/assets/review-2.png'
  },
  { 
    id: 3, 
    name: 'James R.', 
    avatar: '/assets/avatar-3.png',
    rating: 5, 
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    image: '/assets/review-3.png'
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Container>
        
        <SectionTitle title="REVIEWS" buttonText="SEE ALL" link="/" className="mb-12" />
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 md:gap-6 pb-4 md:pb-1 snap-x snap-mandatory scrollbar-hide md:mx-0 md:px-0">
          {REVIEWS_DATA.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl md:rounded-4xl h-[340px] md:h-[501px] overflow-hidden hover:shadow-sm transition-shadow duration-200 min-w-[92vw] max-w-[92vw]  sm:min-w-[300px] md:min-w-0 snap-center flex-shrink-0 flex flex-col">
              <div className="p-4 md:p-8">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="font-semibold text-xl md:text-2xl text-(--dark-gray) mb-2">{review.title}</p>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{review.text}</p>
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-200 overflow-hidden relative flex-shrink-0">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-[#FFA52F] text-[#FFA52F]" />
                    ))}
                  </div>
                  <span className="sm:text-sm text-base font-semibold text-(--dark-gray) ml-1">5.0</span>
                </div>
              </div>
              <div className="relative bg-gray-100 flex-1">
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
