import Link from 'next/link';
import Image from '@/components/common/Image';
import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';

export default function HeroSection() {
  return (
    <section className="pt-8 pb-16">
      <Container>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
          <span className="text-black">DO IT </span>
          <span className="text-blue-600">RIGHT</span>
        </h1>

        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-amber-600 to-amber-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[380px] md:min-h-[480px] relative">
            <div className="hidden lg:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10">
              <div className="bg-gray-900 text-white text-xs py-4 px-1.5 leading-tight flex items-center justify-center h-32" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                Nike product of the year
              </div>
            </div>

            <div className="lg:col-span-8 relative">
              <Image
                src="/images/hero-shoe.png"
                alt="Nike Air Max"
                fill
                className="object-contain md:object-cover"
                priority
              />
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
                <h2 className="text-white text-3xl md:text-4xl font-black mb-2 tracking-tight">NIKE AIR MAX</h2>
                <p className="text-white/90 text-sm md:text-base mb-6 max-w-sm leading-relaxed">
                  Nike introducing the new air max for everyone&apos;s comfort
                </p>
                <Link href="/">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded transition-colors duration-200">
                    SHOP NOW
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-row md:flex-col gap-3 p-4 md:p-6 justify-center md:justify-start items-center md:items-end">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden relative flex-shrink-0 ring-2 ring-amber-400 ring-offset-2 ring-offset-amber-700">
                <Image
                  src="/images/thumb-1.png"
                  alt="Thumbnail 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden relative flex-shrink-0 ring-2 ring-amber-400 ring-offset-2 ring-offset-amber-700">
                <Image
                  src="/images/thumb-2.png"
                  alt="Thumbnail 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
