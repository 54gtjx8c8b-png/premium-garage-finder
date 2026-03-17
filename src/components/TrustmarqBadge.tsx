import { Award } from 'lucide-react';

interface TrustmarqBadgeProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
}

const TrustmarqBadge = ({ score, size = 'md' }: TrustmarqBadgeProps) => {
  if (score < 90) return null;

  const sizeClasses = {
    sm: 'w-16 h-7 text-[9px]',
    md: 'w-20 h-9 text-[10px]',
    lg: 'w-24 h-11 text-xs',
  };

  const iconSize = {
    sm: 'w-3 h-3',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4',
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-primary text-primary-foreground gold-glow-strong flex items-center justify-center gap-1 font-bold tracking-wide`}
    >
      <Award className={iconSize[size]} />
      <span>{score}</span>
    </div>
  );
};

export default TrustmarqBadge;
