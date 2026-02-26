import { Baby, School, Sparkles, BookOpen, Clock, GraduationCap } from 'lucide-react';
import { pathways } from '@/data/pathways';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const iconMap: Record<string, React.ElementType> = {
  Baby,
  School,
  Sparkles,
  BookOpen,
  Clock,
  GraduationCap,
};

export function PathwayCards() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Enrollment Pathways
            </h2>
            <p className="text-lg text-sdusd-gray max-w-2xl mx-auto">
              San Diego Unified offers multiple pathways to meet the needs of every student and family.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((pathway, index) => {
            const Icon = iconMap[pathway.icon] || School;
            return (
              <AnimatedSection key={pathway.id} delay={index * 80}>
                <div className="group p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${pathway.color} text-white mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{pathway.title}</h3>
                  <p className="text-sm text-sdusd-gray leading-relaxed">{pathway.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
