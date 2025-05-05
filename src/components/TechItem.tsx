
import { cn } from "@/lib/utils";

interface TechItemProps {
  name: string;
  description: string;
  className?: string;
}

const TechItem = ({ name, description, className }: TechItemProps) => {
  return (
    <div className={cn(
      "bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300", 
      className
    )}>
      <h3 className="text-lg font-headline font-bold text-primary mb-2">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default TechItem;
