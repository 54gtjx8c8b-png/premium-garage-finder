import { Compass, GitCompare, CalendarCheck, User } from 'lucide-react';
import { useState } from 'react';

const tabs = [
  { id: 'explore', label: 'Explorer', icon: Compass },
  { id: 'compare', label: 'Comparer', icon: GitCompare },
  { id: 'bookings', label: 'Réservations', icon: CalendarCheck },
  { id: 'profile', label: 'Profil', icon: User },
];

const BottomNav = () => {
  const [active, setActive] = useState('explore');

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
              className="flex flex-col items-center justify-center gap-0.5 w-16 py-1 transition-all duration-200 group"
            >
              <div className={`p-1.5 rounded-xl transition-all duration-200 ${
                isActive ? 'bg-primary/15 neon-glow' : ''
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
