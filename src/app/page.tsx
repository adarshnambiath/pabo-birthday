import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import StatsSection from '@/components/stats-section';
import AIFinanceSection from '@/components/ai-finance-section';
import GallerySection from '@/components/gallery-section';
import AadyaSection from '@/components/aadya-section';
import BirthdayMessageSection from '@/components/birthday-message-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <AIFinanceSection />
      <GallerySection />
      <AadyaSection />
      <BirthdayMessageSection />
      <Footer />
    </main>
  );
}
