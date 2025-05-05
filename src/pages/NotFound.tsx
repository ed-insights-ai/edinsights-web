
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-16">
          <h1 className="text-6xl font-bold mb-4 font-headline text-primary">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! This page seems to be out of bounds.</p>
          <Link to="/" className="highlight-button">
            Return to Home Field
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
