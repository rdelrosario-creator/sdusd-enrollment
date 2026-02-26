import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: 'San Diego Unified School District - Enrollment',
  description: 'Enroll your child in San Diego Unified School District. Find your neighborhood school, explore choice programs, and complete your enrollment online.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} antialiased font-sans`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
