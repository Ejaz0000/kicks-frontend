'use client';

import { useState } from 'react';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    setEmail('');
  };

  return (
    <section className="py-16 bg-black text-white">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <SectionTitle
            title="Join Our Newsletter"
            subtitle="Get exclusive drops and offers straight to your inbox"
            className="[&_h2]:text-white [&_p]:text-gray-400"
          />
          <form onSubmit={handleSubmit} className="flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-black"
              required
            />
            <Button type="submit" className="bg-white text-black hover:bg-gray-200 shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
