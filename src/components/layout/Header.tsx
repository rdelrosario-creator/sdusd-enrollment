'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/school-finder', label: 'SchoolFinder' },
  { href: '/enroll', label: 'Enroll' },
  { href: '/choice', label: 'Choice Programs' },
  { href: '/schools', label: 'School Directory' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1">
              <div className="w-3 h-8 bg-sdusd-blue rounded-sm" />
              <div className="w-3 h-8 bg-sdusd-red rounded-sm" />
              <div className="w-3 h-8 bg-sdusd-orange rounded-sm" />
              <div className="w-3 h-8 bg-sdusd-green rounded-sm" />
            </div>
            <div>
              <span className="text-lg font-bold text-sdusd-blue leading-tight block">SDUSD</span>
              <span className="text-[10px] text-sdusd-gray leading-tight block">San Diego Unified</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-sdusd-blue hover:bg-sdusd-blue-light rounded-lg transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/enroll"
              className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-sdusd-blue hover:bg-sdusd-blue-dark rounded-lg transition-colors duration-200"
            >
              Enroll Now
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-sdusd-blue rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 border-t border-gray-100',
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="px-4 py-3 space-y-1 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-sdusd-blue hover:bg-sdusd-blue-light rounded-lg transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/enroll"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 px-3 py-2.5 text-base font-semibold text-white bg-sdusd-blue hover:bg-sdusd-blue-dark rounded-lg text-center transition-colors duration-200"
          >
            Enroll Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
