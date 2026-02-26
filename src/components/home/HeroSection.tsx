import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sdusd-blue via-sdusd-blue-dark to-blue-900">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-sdusd-red" />
              <span className="w-2 h-2 rounded-full bg-sdusd-orange" />
              <span className="w-2 h-2 rounded-full bg-sdusd-green" />
            </div>
            <span className="text-white/80 text-sm font-medium tracking-wide uppercase">
              2025-2026 School Year
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Enroll in{' '}
            <span className="text-sdusd-orange">San Diego Unified</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
            Every child deserves an excellent education. Discover your neighborhood school,
            explore choice programs, and start the enrollment process today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/enroll"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sdusd-orange text-white font-semibold rounded-lg text-lg hover:bg-orange-500 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Start Enrollment
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/school-finder"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg text-lg hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
            >
              Find Your School
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-lg">120K+</span>
              <span>Students</span>
            </div>
            <div className="w-px h-6 bg-blue-400/30" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-lg">180+</span>
              <span>Schools</span>
            </div>
            <div className="w-px h-6 bg-blue-400/30" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-lg">#1</span>
              <span>in San Diego County</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
