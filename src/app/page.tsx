import { HeroSection } from '@/components/home/HeroSection';
import { ActionCards } from '@/components/home/ActionCards';
import { PathwayCards } from '@/components/home/PathwayCards';
import { KeyDates } from '@/components/home/KeyDates';
import { FAQAccordion } from '@/components/home/FAQAccordion';
import { HelpContact } from '@/components/home/HelpContact';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ActionCards />
      <PathwayCards />
      <KeyDates />
      <FAQAccordion />
      <HelpContact />
    </>
  );
}
