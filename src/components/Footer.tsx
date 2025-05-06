import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-baseline">
              <span className="text-xl font-bold">ED Insights</span>
              <span className="text-xl font-bold text-highlight">.AI</span>
            </div>
            <p className="mt-2 text-sm text-gray-300 max-w-md">
              Empowered Data. Artificial Intelligence. Real Results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-headline font-semibold uppercase tracking-wider mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/opportunities" className="text-gray-300 hover:text-white transition-colors">Opportunities</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-headline font-semibold uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:founder@edinsights.ai" className="text-gray-300 hover:text-white transition-colors">
                    founder@edinsights.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} ED-Insights AI. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <a href="https://github.com/ed-insights-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.587 0-.287-.012-1.243-.012-2.263-3.338.738-4.042-1.612-4.042-1.612-.525-1.337-1.287-1.687-1.287-1.687-1.05-.713.075-.7.075-.7 1.162.087 1.775 1.2 1.775 1.2 1.038 1.775 2.713 1.262 3.375.962.1-.75.412-1.262.75-1.55-2.662-.3-5.462-1.337-5.462-5.962 0-1.312.462-2.387 1.2-3.225-.113-.3-.525-1.512.113-3.15 0 0 1-.312 3.3 1.2.95-.263 1.962-.387 2.962-.387s2.012.125 2.962.387c2.3-1.512 3.3-1.2 3.3-1.2.637 1.637.225 2.85.113 3.15.75.837 1.2 1.912 1.2 3.225 0 4.637-2.8 5.662-5.475 5.962.425.362.8 1.087.8 2.2 0 1.587-.012 2.862-.012 3.25 0 .325.2.7.8.587C20.562 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
