import React, { useEffect, useRef } from 'react';

const Stats = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.add('opacity-100');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (statsRef.current) {
      const elements = statsRef.current.querySelectorAll('.stat-item');
      elements.forEach((el) => {
        el.classList.add('opacity-0');
        observer.observe(el);
      });
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={statsRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="stat-item text-center">
            <p className="text-3xl md:text-4xl font-bold text-white mb-2">25k+</p>
            <p className="text-white/60 text-sm">Active users</p>
          </div>
          
          <div className="stat-item text-center" style={{ transitionDelay: '0.1s' }}>
            <p className="text-3xl md:text-4xl font-bold text-white mb-2">$1.2M</p>
            <p className="text-white/60 text-sm">Capital raised</p>
          </div>
          
          <div className="stat-item text-center" style={{ transitionDelay: '0.2s' }}>
            <p className="text-3xl md:text-4xl font-bold text-white mb-2">300%</p>
            <p className="text-white/60 text-sm">Revenue growth</p>
          </div>
          
          <div className="stat-item text-center" style={{ transitionDelay: '0.3s' }}>
            <p className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</p>
            <p className="text-white/60 text-sm">Uptime guarantee</p>
          </div>
        </div>
        
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            "Your brand isn't what you make; it's what you're remembered for."
          </h2>
          <p className="text-white/60">— Design Team</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
