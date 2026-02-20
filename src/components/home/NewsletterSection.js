'use client';

import { useState } from 'react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="py-16">
      <Container>
        <div className="relative bg-blue-600 rounded-3xl overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center">
            <span className="text-[12rem] font-bold text-white/10 select-none">
              KICKS
            </span>
          </div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
              JOIN OUR KICKSPLUS CLUB & GET 15% OFF
            </h2>
            <p className="text-white/80 text-sm mb-6">
              Sign up for free! Join the community.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-black border-0 rounded-lg flex-1"
                required
              />
              <Button type="submit" className="bg-black text-white hover:bg-gray-800 shrink-0 rounded-lg">
                SUBMIT
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
