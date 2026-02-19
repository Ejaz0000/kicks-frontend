import Container from '@/components/layout/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

const MOCK_REVIEWS = [
  { id: 1, name: 'Alex M.', rating: 5, text: 'Best sneaker shop online. Quality and delivery are top tier.' },
  { id: 2, name: 'Sarah K.', rating: 5, text: 'Love the selection. Found exactly what I wanted.' },
  { id: 3, name: 'James R.', rating: 4, text: 'Great prices and fast shipping. Will buy again.' },
];

export default function ReviewsSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle title="What People Say" subtitle="Reviews from our customers" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_REVIEWS.map((review) => (
            <Card key={review.id} className="p-6">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm">{review.text}</p>
              <p className="mt-3 font-semibold text-sm">{review.name}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
