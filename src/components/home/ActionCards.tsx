import Link from 'next/link';
import { ClipboardList, Sparkles, User, MapPin } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const actions = [
  {
    title: 'Enroll Now',
    description: 'Complete your enrollment application online in just a few steps.',
    href: '/enroll',
    icon: ClipboardList,
    color: 'bg-sdusd-blue',
    hoverColor: 'hover:bg-sdusd-blue-dark',
  },
  {
    title: 'Choice Programs',
    description: 'Explore Magnet, STEM, IB, Arts, and Language Immersion schools.',
    href: '/choice',
    icon: Sparkles,
    color: 'bg-sdusd-purple',
    hoverColor: 'hover:bg-purple-900',
  },
  {
    title: 'Parent Portal',
    description: 'Access grades, attendance, and school communications.',
    href: '#',
    icon: User,
    color: 'bg-sdusd-orange',
    hoverColor: 'hover:bg-orange-600',
  },
  {
    title: 'SchoolFinder',
    description: 'Enter your address to find your assigned neighborhood schools.',
    href: '/school-finder',
    icon: MapPin,
    color: 'bg-sdusd-green',
    hoverColor: 'hover:bg-green-700',
  },
];

export function ActionCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <AnimatedSection key={action.title} delay={index * 100}>
              <Link
                href={action.href}
                className={`group block p-6 rounded-xl text-white ${action.color} ${action.hoverColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <action.icon className="h-10 w-10 mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed">{action.description}</p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
