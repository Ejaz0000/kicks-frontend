'use client';

import { useState } from 'react';
import Container from '@/components/layout/Container';
import Image from '@/components/common/Image';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="pt-16 md:pt-20 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="relative bg-(--blue-primary) rounded-t-[24px] md:rounded-t-[48px] overflow-hidden px-4 md:px-18 pt-4 md:pt-16 pb-18 md:pb-24  flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 md:gap-16">
          
          <div className="relative z-10 w-full lg:max-w-[500px]">
            <h2 className="text-[32px] md:text-[48px] font-semibold text-white leading-[1.1] tracking-tight mb-4 max-w-[326px] md:max-w-[510px] lowercase md:uppercase">
              JOIN OUR KICKSPLUS CLUB & GET 15% OFF
            </h2>
            <p className="text-(--light-gray) sub-text text-base md:text-xl font-semibold mb-8">
              Sign up for free! Join the community.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-3 w-full">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-white placeholder:text-white/70 border border-white rounded-lg px-4 py-2 flex-1 focus:outline-none focus:border-white transition-colors max-w-[342px]"
                required
              />
              <button 
                type="submit" 
                className="bg-(--dark-gray) text-white font-medium text-sm tracking-wider px-4 md:px-6 py-2 rounded-lg hover:bg-black transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>

          <div className="relative z-10 w-full flex justify-start md:justify-center">
            <div className='w-[200px] md:w-[367px] h-[62px] md:h-[112px]'>
              <Image
                src="/assets/newsletter-logo.png"
                alt="KICKS Logo"
                width={367}
                height={112}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
