
import { cn } from "@/lib/utils";

interface ValueCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  metric?: string;
  metricLabel?: string;
  className?: string;
}

const ValueCard = ({ 
  title, 
  description, 
  icon, 
  metric, 
  metricLabel,
  className 
}: ValueCardProps) => {
  return (
    <div className={cn(
      "card-effect p-6 h-full flex flex-col", 
      className
    )}>
      {icon && (
        <div className="text-secondary mb-4 flex justify-center">{icon}</div>
      )}
      
      <h3 className="text-xl font-bold mb-2 font-headline">{title}</h3>
      
      {metric && (
        <div className="my-3 flex flex-col items-center">
          <span className="text-3xl font-mono font-bold text-accent">{metric}</span>
          {metricLabel && (
            <span className="text-sm text-gray-500 font-mono">{metricLabel}</span>
          )}
        </div>
      )}
      
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default ValueCard;
