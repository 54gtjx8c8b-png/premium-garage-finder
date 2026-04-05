import { useState } from 'react';
import StickyHeader from '@/components/StickyHeader';
import SearchHero from '@/components/SearchHero';
import FilterChips from '@/components/FilterChips';
import ComparisonEngine from '@/components/ComparisonEngine';
import ReviewCards from '@/components/ReviewCards';
import BottomNav from '@/components/BottomNav';
import HomeMap from '@/components/HomeMap';
import { useGarages } from '@/hooks/useGarages';
import { useGeolocation } from '@/hooks/useGeolocation';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const { data: garages } = useGarages();
  const { position, loading, error, requestLocation, clearLocation } = useGeolocation();

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <StickyHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="pb-20 md:pb-8 md:pt-4">
        <SearchHero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <FilterChips activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        {/* Interactive map section */}
        <div className="px-4 max-w-6xl mx-auto lg:px-6 xl:px-8 mb-4">
          <HomeMap
            garages={garages || []}
            userPosition={position}
            loading={loading}
            error={error}
            onRequestLocation={requestLocation}
            onClearLocation={clearLocation}
          />
        </div>

        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-5 lg:gap-6 lg:px-6 xl:px-8">
          <div className="lg:col-span-2">
            <ComparisonEngine />
          </div>
          <div className="lg:col-span-3">
            <ReviewCards searchQuery={searchQuery} activeFilter={activeFilter} userPosition={position} />
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Index;
