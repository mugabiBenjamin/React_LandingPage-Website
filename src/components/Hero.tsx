import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingElementsRef.current) return;
      
      const elements = floatingElementsRef.current.querySelectorAll('.floating-element');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      elements.forEach((element, index) => {
        const depth = 1 + (index % 3) * 0.2;
        const moveX = (mouseX - 0.5) * 30 * depth;
        const moveY = (mouseY - 0.5) * 30 * depth;
        
        (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section id='hero' className="animate-fade-in animate-on-scroll relative min-h-screen pt-20 pb-24 overflow-hidden flex items-center transition-all duration-500">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-purple/20 via-transparent to-transparent opacity-30" style={{ top: '20%' }}></div>
      
      {/* Floating elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-1/4 left-1/4 w-56 h-56 rounded-full bg-purple/5 animate-float"></div>
        <div className="floating-element absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-purple/5 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="floating-element absolute bottom-1/3 left-1/3 w-36 h-36 rounded-full bg-purple/5 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="floating-element absolute top-1/2 right-1/3 w-28 h-28 rounded-full bg-purple/10 animate-float" style={{ animationDelay: '7.5s' }}></div>
        <div className="floating-element absolute top-2/3 left-1/2 w-16 h-16 rounded-full bg-purple/25 animate-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/25 animate-fade-in">
            <span className="text-sm">New Features Available</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient animate-fade-in" style={{ transitionDelay: '0.9s' }}>
            Design system <br />infrastructure for <br />modern teams
          </h1>
          
          <p className="text-white/70 text-xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ transitionDelay: '1.6s' }}>
            All-in-one platform to standardize your design workflow and build better products faster than ever before.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in transition" style={{ transitionDelay: '2.2s' }}>
            <Button className="w-full sm:w-auto bg-purple hover:bg-purple-dark text-white py-6 px-8 text-lg font-medium rounded-2xl transition-all duration-300 hover:shadow-glow-purple">
              Get started free
            </Button>
            <Button variant="ghost" className="w-full sm:w-auto text-white/90 hover:text-white py-6 px-8 text-lg font-medium rounded-2xl transition duration-500">
              See how it works <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60 animate-fade-in" style={{ animationDelay: '2.8s' }}>
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-purple-light" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-purple-light" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-purple-light" />
              <span>14-day free trial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
