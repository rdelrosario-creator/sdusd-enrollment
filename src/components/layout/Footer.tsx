import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                <div className="w-2 h-6 bg-sdusd-blue rounded-sm" />
                <div className="w-2 h-6 bg-sdusd-red rounded-sm" />
                <div className="w-2 h-6 bg-sdusd-orange rounded-sm" />
                <div className="w-2 h-6 bg-sdusd-green rounded-sm" />
              </div>
              <span className="text-white font-bold">San Diego Unified School District</span>
            </div>
            <p className="text-sm leading-relaxed">
              Inspiring, engaging, and empowering every student, every day, in every way.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/enroll" className="hover:text-white transition-colors">Enrollment</Link></li>
              <li><Link href="/choice" className="hover:text-white transition-colors">Choice Programs</Link></li>
              <li><Link href="/school-finder" className="hover:text-white transition-colors">SchoolFinder</Link></li>
              <li><Link href="/schools" className="hover:text-white transition-colors">School Directory</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-white transition-colors cursor-pointer">Parent Portal</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Transportation</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">School Meals</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Special Education</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sdusd-orange" />
                <span>(619) 260-2410</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sdusd-orange" />
                <span>enrollment@sandi.net</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-sdusd-orange shrink-0 mt-0.5" />
                <span>4100 Normal Street<br />San Diego, CA 92103</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>&copy; 2025 San Diego Unified School District. All rights reserved.</p>
          <p className="mt-1">This is a demo website for demonstration purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
