import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Urgency from '@/components/Urgency';
import Approach from '@/components/Approach';
import Value from '@/components/Value';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import MarketingResults from '@/components/MarketingResults';
import MarketingPain from '@/components/MarketingPain';
import MarketingDifference from '@/components/MarketingDifference';
import MarketingPerformance from '@/components/MarketingPerformance';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Urgency />
        <Approach />
        <Value />
        <Services />
        <Portfolio />
        <About />
        <MarketingResults />
        <MarketingPain />
        <MarketingDifference />
        <MarketingPerformance />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
