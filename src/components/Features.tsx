import React, { useEffect, useRef } from 'react';
import { Code, Palette, Users, Zap } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
};

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <div 
    className="feature-card glass-card p-8 rounded-xl opacity-0 transform translate-y-8"
    style={{ transitionDelay: delay }}
  >
    <div className="w-12 h-12 rounded-lg bg-purple/20 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

const Features = () => {
  const featuresRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = featuresRef.current?.querySelectorAll('.feature-card');
            cards?.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
                card.classList.add('opacity-100');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="features" ref={featuresRef} className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple/10 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-purple/10 rounded-full filter blur-[60px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A Complete Design Infrastructure</h2>
          <p className="text-white/70">Everything you need to standardize your design system workflow and collaboration.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Palette className="text-purple-light h-6 w-6 animate-fade-in animate-on-scroll" />}
            title="Design System Management"
            description="Create, manage, and distribute design tokens and assets to maintain consistency across your products."
            delay="0ms"
          />
          
          <FeatureCard
            icon={<Code className="text-purple-light h-6 w-6 animate-fade-in animate-on-scroll" />}
            title="Code Integration"
            description="Seamlessly integrate with your codebase and generate ready-to-use components for all frameworks."
            delay="100ms"
          />
          
          <FeatureCard
            icon={<Users className="text-purple-light h-6 w-6 animate-fade-in animate-on-scroll" />}
            title="Team Collaboration"
            description="Bring designers and developers together with real-time collaboration and version control."
            delay="200ms"
          />
          
          <FeatureCard
            icon={<Zap className="text-purple-light h-6 w-6 animate-fade-in animate-on-scroll" />}
            title="Performance Optimization"
            description="Optimize your design system for performance with built-in analysis and recommendations."
            delay="300ms"
          />
          
          <FeatureCard
            icon={<Palette className="text-purple-light h-6 w-6 animate-fade-in animate-on-scroll" />}
            title="Color System"
            description="Create and manage comprehensive color schemes with automatic accessibility checking."
            delay="400ms"
          />
          
          <FeatureCard
            icon={<Code className="text-purple-light h-6 w-6 animate-fade-in animate-on-scroll" />}
            title="Documentation Generator"
            description="Automatically generate beautiful documentation for your design system."
            delay="500ms"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
