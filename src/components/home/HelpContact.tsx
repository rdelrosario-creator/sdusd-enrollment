import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function HelpContact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Need Help?
                </h2>
                <p className="text-sdusd-gray mb-8 leading-relaxed">
                  Our Enrollment & Choice Office is here to help you every step of the way.
                  Don&apos;t hesitate to reach out — we&apos;re happy to assist in English, Spanish, and many other languages.
                </p>

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-sdusd-blue-light text-sdusd-blue shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-sdusd-gray">Phone</p>
                      <p className="font-semibold text-gray-900">(619) 260-2410</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-sdusd-blue-light text-sdusd-blue shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-sdusd-gray">Email</p>
                      <p className="font-semibold text-gray-900">enrollment@sandi.net</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-sdusd-blue-light text-sdusd-blue shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-sdusd-gray">Visit Us</p>
                      <p className="font-semibold text-gray-900">4100 Normal Street, San Diego, CA 92103</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-sdusd-blue-light text-sdusd-blue shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-sdusd-gray">Hours</p>
                      <p className="font-semibold text-gray-900">Monday - Friday, 8:00 AM - 4:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-sdusd-blue to-sdusd-blue-dark p-8 lg:p-12 text-white flex items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Family Welcome Center</h3>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    Visit our Family Welcome Center for in-person enrollment assistance.
                    Walk-ins welcome! Our multilingual staff can help with enrollment,
                    school selection, and connecting you with district resources.
                  </p>
                  <div className="flex items-center gap-2 text-sdusd-orange font-semibold">
                    <span>No appointment necessary</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
