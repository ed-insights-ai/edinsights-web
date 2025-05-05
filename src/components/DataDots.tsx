
import { useEffect, useRef } from 'react';

interface DataDotsProps {
  className?: string;
}

const DataDots = ({ className = "" }: DataDotsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Create and animate dots
    const createDot = () => {
      const dot = document.createElement('div');
      dot.classList.add('data-dot');
      
      // Random position within the container
      const left = Math.random() * containerWidth;
      const delay = Math.random() * 3;
      
      dot.style.left = `${left}px`;
      dot.style.animationDelay = `${delay}s`;
      
      container.appendChild(dot);
      
      // Remove dot after animation completes
      setTimeout(() => {
        if (container.contains(dot)) {
          container.removeChild(dot);
        }
      }, 3000 + (delay * 1000));
    };
    
    // Create initial dots
    for (let i = 0; i < 20; i++) {
      setTimeout(() => createDot(), Math.random() * 3000);
    }
    
    // Create new dots periodically
    const interval = setInterval(createDot, 300);
    
    return () => {
      clearInterval(interval);
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    ></div>
  );
};

export default DataDots;
