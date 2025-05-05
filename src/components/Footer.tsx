
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-baseline">
              <span className="text-xl font-bold">ED-Insights</span>
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
            <p className="text-sm text-gray-400">
              Where sports analytics meets cutting-edge AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
