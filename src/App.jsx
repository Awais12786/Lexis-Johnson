import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import RevealBox from './components/RevealBox';
import SignalGrid from './components/SignalGrid';
import AppBox from './components/AppBox';
import IncomeLeakBox from './components/IncomeLeakBox';
import AuditSection from './components/AuditSection';
import BookBundle from './components/BookBundle';
import CredibilityProfile from './components/CredibilityProfile';
import FinalCTA from './components/FinalCTA';
import AuditForm from './components/AuditForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32">
        <Hero />
        <BentoGrid />
        <RevealBox />
        <SignalGrid />
        <AppBox />
        <IncomeLeakBox />
        <AuditSection />
        <BookBundle />
        <CredibilityProfile />
        <FinalCTA />
        <AuditForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
