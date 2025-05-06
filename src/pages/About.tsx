
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import DataDots from "@/components/DataDots";
import { BarChart, LineChart, ChartPie } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-20 bg-primary text-white relative overflow-hidden">
        <DataDots className="opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-headline">About EDInsights.AI</h1>
            <p className="text-xl mb-0 text-white/80 max-w-2xl mx-auto">
              Transforming the world of sports analytics through innovative AI solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Our Vision" 
                subtitle="We're revolutionizing how sports teams use data to gain competitive advantages."
                align="left"
              />
              
              <p className="text-gray-600 mb-6">
                At EDInsights.AI, we believe that the future of sports lies at the intersection of athletic performance and advanced analytics. Our mission is to transform raw sports data into actionable insights that drive performance, strategy, and results.
              </p>
              
              <p className="text-gray-600 mb-6">
                Founded by a team of data scientists and sports enthusiasts, we're dedicated to developing AI solutions that make complex data accessible and useful for coaches, athletes, and sports organizations of all sizes.
              </p>
              
              <p className="text-gray-600">
                Our current focus is on NCAA soccer analytics, where we're building a comprehensive player analysis system that will revolutionize how teams evaluate performance, develop strategy, and make in-game decisions.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                
                <h3 className="text-2xl font-bold mb-6 font-headline">Our Core Values</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0 mr-4">
                      <BarChart className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 font-headline">Data-Driven Excellence</h4>
                      <p className="text-gray-600">We believe in the power of data to transform performance and drive continuous improvement.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mr-4">
                      <LineChart className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 font-headline">Innovation</h4>
                      <p className="text-gray-600">We're constantly pushing the boundaries of what's possible in sports analytics.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center shrink-0 mr-4">
                      <ChartPie className="w-6 h-6 text-highlight" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 font-headline">Accessibility</h4>
                      <p className="text-gray-600">We make complex data and advanced analytics accessible to all levels of sports organizations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-20 bg-gray-50 relative">
        <div className="grid-pattern absolute inset-0 opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading 
            title="Our Approach" 
            subtitle="How we leverage AI for athletic performance analysis"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="font-mono font-bold text-2xl text-primary">01</span>
              </div>
              <h3 className="text-xl font-bold mb-4 font-headline text-center">Data Collection & Cleaning</h3>
              <p className="text-gray-600">
                Just as a coach watches game film, our systems capture every movement, decision, and outcome from matches. We gather data from multiple sources, clean it, and prepare it for deep analysis.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm md:transform md:translate-y-8">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="font-mono font-bold text-2xl text-secondary">02</span>
              </div>
              <h3 className="text-xl font-bold mb-4 font-headline text-center">Advanced AI Processing</h3>
              <p className="text-gray-600">
                Like a seasoned scout with perfect memory, our AI algorithms analyze thousands of data points, identifying patterns and insights that would be impossible to spot with the human eye alone.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="font-mono font-bold text-2xl text-accent">03</span>
              </div>
              <h3 className="text-xl font-bold mb-4 font-headline text-center">Actionable Insights Delivery</h3>
              <p className="text-gray-600">
                We translate complex data into clear, actionable recommendations that coaches and players can immediately apply to improve performance and strategy, just like a powerful halftime adjustment.
              </p>
            </div>
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 font-headline text-center">The Data Transformation Process</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between text-center">
              <div className="mb-8 md:mb-0">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono text-4xl font-bold text-secondary">1M+</span>
                </div>
                <p className="text-gray-600 font-mono">Data Points</p>
              </div>
              
              <div className="hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <div className="mb-8 md:mb-0">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono text-4xl font-bold text-accent">AI</span>
                </div>
                <p className="text-gray-600 font-mono">Processing</p>
              </div>
              
              <div className="hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <div>
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono text-4xl font-bold text-highlight">10x</span>
                </div>
                <p className="text-gray-600 font-mono">Performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
