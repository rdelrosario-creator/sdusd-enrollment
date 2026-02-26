import { Calendar } from 'lucide-react';
import { keyDates } from '@/data/key-dates';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function KeyDates() {
  return (
    <section className="py-16 bg-sdusd-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Key Enrollment Dates
            </h2>
            <p className="text-lg text-sdusd-gray max-w-2xl mx-auto">
              Mark your calendar with these important dates for the 2025-2026 school year.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {keyDates.map((item, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="flex gap-4 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sdusd-blue text-white shrink-0">
                    <Calendar className="h-5 w-5" />
                  </div>
                  {index < keyDates.length - 1 && (
                    <div className="w-0.5 h-full bg-sdusd-blue/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="inline-block px-3 py-1 bg-white rounded-full text-sm font-semibold text-sdusd-blue mb-2 shadow-sm">
                    {item.date}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-sdusd-gray leading-relaxed">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
