
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = "center", 
  className 
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };
  
  return (
    <div className={cn(
      "mb-12 max-w-2xl", 
      alignmentClasses[align], 
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 bg-secondary w-20 mt-4", 
        align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
      )} />
    </div>
  );
};

export default SectionHeading;
