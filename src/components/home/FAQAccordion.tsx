import { faqItems } from '@/data/faq';
import { Accordion } from '@/components/ui/Accordion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function FAQAccordion() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-sdusd-gray">
              Find answers to common enrollment questions.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <Accordion items={faqItems} />
        </AnimatedSection>
      </div>
    </section>
  );
}
