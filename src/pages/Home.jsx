import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import RevealBox from '../components/RevealBox';
import SignalGrid from '../components/SignalGrid';
import AppBox from '../components/AppBox';
import IncomeLeakBox from '../components/IncomeLeakBox';
import AuditSection from '../components/AuditSection';
import BookBundle from '../components/BookBundle';
import CredibilityProfile from '../components/CredibilityProfile';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import AuditForm from '../components/AuditForm';

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityProfile />
      <BentoGrid />
      <RevealBox />
      <SignalGrid />
      <AppBox />
      <IncomeLeakBox />
      <Testimonials />
      <AuditSection />
      <BookBundle />
      <FinalCTA />
      <AuditForm />
    </>
  );
}
