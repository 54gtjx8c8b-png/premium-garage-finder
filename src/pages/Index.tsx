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
      <main className="pb-16">
        <SearchHero />
        <FilterChips />
        <ComparisonEngine />
        <ReviewCards />
      </main>
      <BottomNav />
    </div>
  );
};

export default Index;
