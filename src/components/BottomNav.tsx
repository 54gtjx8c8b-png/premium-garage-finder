import { Home, Trophy, Bookmark } from 'lucide-react';
import { useState } from 'react';

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'rankings', label: 'Top Rankings', icon: Trophy },
  { id: 'garage', label: 'My Garage', icon: Bookmark },
];

const BottomNav = () => {
  const [active, setActive] = useState('home');

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-t border-border safe-bottom md:hidden">
      <div className="max-w-lg mx-auto flex items-center justify-around h-14 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className="flex flex-col items-center justify-center gap-0.5 w-20 py-1 transition-all duration-150"
            >
              <Icon className={`w-5 h-5 transition-colors ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`} />
              <span className={`text-[10px] font-medium transition-colors ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
