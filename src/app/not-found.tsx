import Link from 'next/link';
import { Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-sdusd-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Page Not Found</h2>
        <p className="text-sdusd-gray mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find your way.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/">
            <Button>
              <Home className="h-4 w-4 mr-2" /> Go Home
            </Button>
          </Link>
          <Link href="/school-finder">
            <Button variant="outline">
              <Search className="h-4 w-4 mr-2" /> Find a School
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
