import StickyHeader from '@/components/StickyHeader';
import SearchHero from '@/components/SearchHero';
import FilterChips from '@/components/FilterChips';
import ComparisonEngine from '@/components/ComparisonEngine';
import ReviewCards from '@/components/ReviewCards';
import BottomNav from '@/components/BottomNav';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <StickyHeader />
      <main className="pb-20 md:pb-8 md:pt-4">
        <SearchHero />
        <FilterChips />
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-5 lg:gap-6 lg:px-6 xl:px-8">
          <div className="lg:col-span-2">
            <ComparisonEngine />
          </div>
          <div className="lg:col-span-3">
            <ReviewCards />
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Index;
