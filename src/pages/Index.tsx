
import { Link } from "react-router-dom";
import { BarChart, LineChart, LayoutDashboard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ValueCard from "@/components/ValueCard";
import AnimatedDataBackground from "@/components/AnimatedDataBackground";
import DataDots from "@/components/DataDots";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <AnimatedDataBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-headline leading-tight">
                Empowered Data <br />
                <span className="text-secondary">Artificial Intelligence</span> <br />
                Real Results
              </h1>
              <p className="text-xl mb-8 text-gray-700 max-w-xl">
                Transforming NCAA soccer data into winning insights through cutting-edge AI technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/opportunities" className="highlight-button">
                  Join Our Team
                </Link>
                <Link to="/about" className="relative px-6 py-3 text-primary border-2 border-primary rounded-md font-headline font-semibold hover:bg-primary/5 transition-colors duration-300">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                <DataDots />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 font-headline">Data-Driven Insights</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-100 rounded-md p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-sm">Player Performance</span>
                        <span className="text-accent font-mono font-bold">+28%</span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-100 rounded-md p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-sm">Team Coordination</span>
                        <span className="text-secondary font-mono font-bold">+41%</span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full" style={{ width: '91%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-100 rounded-md p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-sm">Strategic Decisions</span>
                        <span className="text-highlight font-mono font-bold">+63%</span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-highlight rounded-full" style={{ width: '63%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="grid-pattern absolute inset-0 opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading 
            title="Where Data Science Meets Athletic Performance" 
            subtitle="We transform complex sports data into actionable insights that drive performance and results."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              title="Enhanced Performance"
              description="Our AI systems analyze player movements and decisions to identify patterns that lead to improved on-field performance."
              icon={<BarChart className="w-12 h-12" />}
              metric="37%"
              metricLabel="Performance Increase"
            />
            
            <ValueCard 
              title="Strategic Advantage"
              description="Transform raw match data into strategic insights that give your team the competitive edge."
              icon={<LineChart className="w-12 h-12" />}
              metric="86%"
              metricLabel="Coaching Confidence"
            />
            
            <ValueCard 
              title="Complete Dashboard"
              description="Comprehensive visualization tools that make complex data accessible to coaches and players."
              icon={<LayoutDashboard className="w-12 h-12" />}
              metric="12K+"
              metricLabel="Data Points Analyzed"
            />
          </div>
        </div>
      </section>
      
      {/* Technology Preview */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <DataDots className="opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading 
            title="Cutting-Edge Technology" 
            subtitle="Leveraging the latest in artificial intelligence and machine learning to transform sports analytics."
            className="text-white"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full">
                <h3 className="text-2xl font-bold mb-4 font-headline">Advanced Data Analysis</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-secondary/20 rounded-full p-2 mr-4 mt-1">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    </div>
                    <div>
                      <h4 className="font-mono text-lg mb-1">Python & AI</h4>
                      <p className="text-white/80">Utilizing the power of Python and advanced AI models to extract meaningful patterns from massive datasets.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-accent/20 rounded-full p-2 mr-4 mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <div>
                      <h4 className="font-mono text-lg mb-1">Machine Learning</h4>
                      <p className="text-white/80">Custom algorithms that adapt and improve over time, delivering increasingly accurate performance predictions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-highlight/20 rounded-full p-2 mr-4 mt-1">
                      <div className="w-2 h-2 rounded-full bg-highlight"></div>
                    </div>
                    <div>
                      <h4 className="font-mono text-lg mb-1">Real-time Processing</h4>
                      <p className="text-white/80">Instant data processing capabilities that deliver insights during matches, not just in post-game analysis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 font-headline">Data Transformation Process</h3>
                  
                  <div className="flex flex-col space-y-8">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                        <span className="font-mono font-bold text-xl">01</span>
                      </div>
                      <div className="h-16 w-1 bg-gradient-to-b from-secondary to-transparent mx-4"></div>
                      <div>
                        <h4 className="font-mono text-lg mb-1">Data Collection</h4>
                        <p className="text-white/80">Gathering raw data from matches, sensors, and player tracking systems.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                        <span className="font-mono font-bold text-xl">02</span>
                      </div>
                      <div className="h-16 w-1 bg-gradient-to-b from-accent to-transparent mx-4"></div>
                      <div>
                        <h4 className="font-mono text-lg mb-1">AI Processing</h4>
                        <p className="text-white/80">Our algorithms analyze and identify patterns invisible to the human eye.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-highlight/20 rounded-full flex items-center justify-center shrink-0">
                        <span className="font-mono font-bold text-xl">03</span>
                      </div>
                      <div>
                        <h4 className="font-mono text-lg mb-1">Actionable Insights</h4>
                        <p className="text-white/80">Transforming complex data into clear, actionable recommendations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/about" className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-md font-headline font-semibold hover:bg-white/90 transition-colors duration-300">
              Learn More About Our Approach
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
