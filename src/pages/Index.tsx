import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ComparisonSection from '@/components/ComparisonSection';
import FilterBadges from '@/components/FilterBadges';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FilterBadges />
      <ComparisonSection />
      <Footer />
    </div>
  );
};

export default Index;
