import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import TechItem from "@/components/TechItem";
import DataDots from "@/components/DataDots";

const Opportunities = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-20 bg-primary text-white relative overflow-hidden">
        <DataDots className="opacity-30" />
        {/* Position Filled Banner */}
        <div className="absolute top-0 right-0 overflow-hidden w-40 h-40 z-20">
          <div className="bg-accent text-white font-bold text-lg py-2 text-center w-56 transform rotate-45 translate-x-2 translate-y-12 shadow-lg">
            Signed
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-headline">Join the Starting Lineup</h1>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Data Science Python Developer Internship
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                <span className="font-mono font-bold text-2xl text-highlight">$10,000</span>
                <span className="text-white/80 ml-2">Potential Value</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                <span className="font-mono font-bold text-2xl text-accent">10</span>
                <span className="text-white/80 ml-2">Week Program</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Spotlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Project Spotlight" 
            subtitle="NCAA Division II Soccer Player Analysis System"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6 font-headline">Project Goals</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-secondary/20 rounded-full p-2 mr-4 mt-1">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    </div>
                    <div>
                      <h4 className="font-headline font-semibold mb-1">Player Performance Tracking</h4>
                      <p className="text-gray-600">Develop AI systems to analyze individual player movements, decisions, and outcomes during matches.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-accent/20 rounded-full p-2 mr-4 mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <div>
                      <h4 className="font-headline font-semibold mb-1">Team Strategy Analysis</h4>
                      <p className="text-gray-600">Create visualization tools that reveal team formations, movement patterns, and strategic effectiveness.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-highlight/20 rounded-full p-2 mr-4 mt-1">
                      <div className="w-2 h-2 rounded-full bg-highlight"></div>
                    </div>
                    <div>
                      <h4 className="font-headline font-semibold mb-1">Real-time Decision Support</h4>
                      <p className="text-gray-600">Build systems that provide coaches with actionable insights during matches for immediate tactical adjustments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 font-headline">Project Timeline</h3>
                
                <div className="relative">
                  <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200"></div>
                  
                  <div className="relative flex items-start mb-8">
                    <div className="absolute left-8 w-0.5 h-full bg-gray-200"></div>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0 z-10">
                      <span className="font-mono font-bold text-primary">01</span>
                    </div>
                    <div className="ml-6">
                      <h4 className="font-headline font-bold mb-1">Training Camp (Weeks 1-2)</h4>
                      <p className="text-gray-600">Onboarding, technical training, and project planning.</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start mb-8">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center shrink-0 z-10">
                      <span className="font-mono font-bold text-secondary">02</span>
                    </div>
                    <div className="ml-6">
                      <h4 className="font-headline font-bold mb-1">Regular Season (Weeks 3-7)</h4>
                      <p className="text-gray-600">Core development work on the analysis system.</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start mb-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center shrink-0 z-10">
                      <span className="font-mono font-bold text-accent">03</span>
                    </div>
                    <div className="ml-6">
                      <h4 className="font-headline font-bold mb-1">Playoffs (Weeks 8-9)</h4>
                      <p className="text-gray-600">Testing, refinement, and optimization of systems.</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="w-16 h-16 bg-highlight/10 rounded-full flex items-center justify-center shrink-0 z-10">
                      <span className="font-mono font-bold text-highlight">04</span>
                    </div>
                    <div className="ml-6">
                      <h4 className="font-headline font-bold mb-1">Championship (Week 10)</h4>
                      <p className="text-gray-600">Final deployment, documentation, and presentation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Compensation Structure */}
      <section className="py-20 bg-gray-50 relative">
        <div className="grid-pattern absolute inset-0 opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading 
            title="Compensation Structure" 
            subtitle="A performance-based package worth up to $10,000 in value"
          />
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono font-bold text-xl text-primary">Base</span>
                </div>
                <h3 className="font-headline font-bold text-2xl mb-2">$3,000</h3>
                <p className="text-gray-600 font-mono text-sm">$300 × 10 weeks</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono font-bold text-xl text-secondary">Bonus</span>
                </div>
                <h3 className="font-headline font-bold text-2xl mb-2">$6,300</h3>
                <p className="text-gray-600 font-mono text-sm">Performance-based</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono font-bold text-xl text-accent">Extra</span>
                </div>
                <h3 className="font-headline font-bold text-2xl mb-2">$460+</h3>
                <p className="text-gray-600 font-mono text-sm">In subscriptions</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="font-headline font-bold text-xl mb-4">Performance Bonuses</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="font-mono font-bold text-secondary">$1,500</span>
                  <p className="text-gray-600 text-sm mt-1">Project Milestone Completion</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="font-mono font-bold text-secondary">$2,000</span>
                  <p className="text-gray-600 text-sm mt-1">System Performance Metrics</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="font-mono font-bold text-secondary">$2,800</span>
                  <p className="text-gray-600 text-sm mt-1">Innovation & Implementation</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-headline font-bold text-xl mb-4">Additional Benefits</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <span className="font-mono font-bold text-accent">$179</span>
                    <p className="text-gray-600 text-sm mt-1">Python IDE Subscription</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <span className="font-mono font-bold text-accent">$149</span>
                    <p className="text-gray-600 text-sm mt-1">Data Visualization Tools</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <span className="font-mono font-bold text-accent">$132</span>
                    <p className="text-gray-600 text-sm mt-1">Cloud Computing Credits</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <span className="font-mono font-bold text-accent">Free</span>
                    <p className="text-gray-600 text-sm mt-1">Mentorship & Training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Tech Stack" 
            subtitle="Technologies you'll master during this internship"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6 font-headline bg-primary text-white py-2 px-4 rounded-md inline-block">Core Python</h3>
              <div className="grid grid-cols-1 gap-4">
                <TechItem 
                  name="NumPy & Pandas" 
                  description="Data manipulation and analysis for large datasets" 
                />
                <TechItem 
                  name="Matplotlib & Seaborn" 
                  description="Data visualization libraries for creating insightful graphs" 
                />
                <TechItem 
                  name="SciPy" 
                  description="Advanced scientific computing and statistical analysis" 
                />
                <TechItem 
                  name="Jupyter Notebooks" 
                  description="Interactive computing environment for data exploration" 
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 font-headline bg-secondary text-white py-2 px-4 rounded-md inline-block">Data Science</h3>
              <div className="grid grid-cols-1 gap-4">
                <TechItem 
                  name="Scikit-learn" 
                  description="Machine learning library for predictive data analysis" 
                />
                <TechItem 
                  name="TensorFlow & Keras" 
                  description="Deep learning frameworks for neural networks" 
                />
                <TechItem 
                  name="OpenCV" 
                  description="Computer vision library for video and image analysis" 
                />
                <TechItem 
                  name="Plotly Dash" 
                  description="Interactive web-based dashboards for data visualization" 
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 font-headline bg-accent text-white py-2 px-4 rounded-md inline-block">DevOps & Tools</h3>
              <div className="grid grid-cols-1 gap-4">
                <TechItem 
                  name="Git & GitHub" 
                  description="Version control and collaborative development" 
                />
                <TechItem 
                  name="Docker" 
                  description="Containerization for consistent deployment environments" 
                />
                <TechItem 
                  name="AWS" 
                  description="Cloud infrastructure for model deployment and scaling" 
                />
                <TechItem 
                  name="FastAPI" 
                  description="Creating high-performance APIs for model serving" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Section */}
      <section className="py-20 bg-primary text-white relative">
        <DataDots className="opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Position Has Been Filled</h2>
            <div className="bg-accent/20 backdrop-blur-sm p-4 mb-8 rounded-lg inline-block">
              <p className="text-xl font-semibold">
                Thank you for your interest! This position has been filled.
              </p>
              <p className="text-white/80 mt-2">
                Please check back for future opportunities.
              </p>
            </div>
            
            <p className="text-xl mb-8 text-white/80">
              Our Data Science Python Developer Internship program helps transform the world of sports analytics.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg inline-block text-left">
              <h3 className="text-2xl font-bold mb-4 font-headline">Contact Information</h3>
              <p className="mb-6 text-white/80">
                For questions about future openings, please email:
              </p>
              <div className="bg-white/20 p-4 rounded-md text-center mb-6">
                <span className="font-mono font-bold text-xl">founder@edinsights.ai</span>
              </div>
              <p className="text-white/80 text-sm">
                Please include "NCAA Soccer Analytics Internship" in the subject line. Applications are reviewed on a rolling basis.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Opportunities;
