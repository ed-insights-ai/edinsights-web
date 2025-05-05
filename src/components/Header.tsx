import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if the current page has a dark header
  const isDarkHeader = location.pathname === '/about' || location.pathname === '/opportunities';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when location changes
    setMobileMenuOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Opportunities', path: '/opportunities' }
  ];
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-baseline">
              <span className="text-xl sm:text-2xl font-bold text-gray-500">ED-Insights</span>
              <span className="text-xl sm:text-2xl font-bold text-highlight">.AI</span>
            </div>
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <Link 
                key={link.path}
                to={link.path}
                className={cn(
                  "font-headline font-medium text-sm uppercase tracking-wider transition-colors duration-300",
                  location.pathname === link.path 
                    ? "text-secondary" 
                    : (!isScrolled && isDarkHeader)
                      ? "text-white/90 hover:text-highlight"
                      : "text-primary/80 hover:text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="mailto:founder@edinsights.ai" 
              className="font-headline font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-md bg-highlight text-white transition-all hover:bg-highlight/90"
            >
              Contact
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className={cn(
              "md:hidden p-2",
              (!isScrolled && isDarkHeader) ? "text-white" : "text-primary"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <nav className={cn(
            "md:hidden pt-4 pb-2 space-y-2 flex flex-col",
            (!isScrolled && isDarkHeader) ? "bg-primary/90 rounded-lg mt-2 backdrop-blur-md" : ""
          )}>
            {navLinks.map(link => (
              <Link 
                key={link.path}
                to={link.path}
                className={cn(
                  "font-headline py-2 px-4 rounded-md transition-colors duration-300",
                  location.pathname === link.path 
                    ? (!isScrolled && isDarkHeader) ? "bg-white/10 text-highlight" : "bg-primary/5 text-secondary"
                    : (!isScrolled && isDarkHeader) 
                      ? "text-white/80 hover:bg-white/10 hover:text-highlight" 
                      : "text-primary/80 hover:bg-primary/5 hover:text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="mailto:founder@edinsights.ai" 
              className="font-headline font-medium py-2 px-4 mt-2 rounded-md bg-highlight text-white text-center transition-all hover:bg-highlight/90"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
