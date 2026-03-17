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
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass safe-bottom">
      <div className="max-w-lg mx-auto flex items-center justify-around h-16 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className="flex flex-col items-center justify-center gap-0.5 w-20 py-1 transition-all duration-200 group"
            >
              <div className={`p-1.5 rounded-xl transition-all duration-200 ${
                isActive ? 'bg-primary/15 gold-glow' : ''
              }`}>
                <Icon className={`w-5 h-5 transition-colors duration-200 ${
                  isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                }`} />
              </div>
              <span className={`text-[10px] font-medium transition-colors duration-200 ${
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
