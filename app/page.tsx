import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
// import Experience from '@/components/home/Experience';
import WhyHireMe from '@/components/home/WhyHireMe';
import Portfolio from '@/components/home/Portfolio';
import Testimonials from '@/components/home/Testimonials';
import ContactCTA from '@/components/home/ContactCTA';
import MovingBanner from '@/components/home/MovingBanner';
import Blog from '@/components/home/Blog';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      {/* <Experience /> */}
      <WhyHireMe />
      <Portfolio />
      <Testimonials />
      <ContactCTA />
      <MovingBanner />
      <Blog />
      <Footer />
    </main>
  );
}
