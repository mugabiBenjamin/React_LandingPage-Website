import React, { useEffect, useRef } from 'react';

const Showcase = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          } else {
            entry.target.classList.remove('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="showcase" ref={showcaseRef} className="py-24 relative overflow-hidden bg-[#0a0a0e]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-purple/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-purple/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Streamline Your Design Workflow</h2>
          <p className="text-white/70">Our platform provides everything you need to create, manage, and implement your design system.</p>
        </div>

        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden glass-card animate-on-scroll">
          <div className="absolute top-0 left-0 right-0 h-10 bg-black/60 flex items-center px-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <img
            src="/image.png"
            alt="Design System Platform Screenshot"
            className="w-full object-cover rounded-b-2xl mt-10 transform hover:scale-[1.02] transition-transform duration-700"
          />
          <div className="px-3 py-0.5 my-3 bg-white/5 backdrop-blur-xs rounded-full border border-white/15 animate-fade-in mx-auto items-center justify-center flex space-x-2">
            <span className="text-sm">Template Using The Bootstrap Builder</span>
          </div>
          <img
            src="/image2.png"
            alt="Design System Platform Screenshot"
            className="w-full object-cover rounded-2xl transform hover:scale-[1.02] transition-transform duration-700"
          />
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center animate-on-scroll">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple/20 flex items-center justify-center purple-glow">
              <div className="w-8 h-8 text-purple-light flex items-center justify-center">
                <span className="text-2xl font-bold">1</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Design Once</h3>
            <p className="text-white/70">Create your design foundations, components, and styles with our intuitive tools.</p>
          </div>

          <div className="text-center animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple/20 flex items-center justify-center purple-glow">
              <div className="w-8 h-8 text-purple-light flex items-center justify-center">
                <span className="text-2xl font-bold">2</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Collaborate</h3>
            <p className="text-white/70">Share, get feedback, and iterate together with your entire team in real-time.</p>
          </div>

          <div className="text-center animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple/20 flex items-center justify-center purple-glow">
              <div className="w-8 h-8 text-purple-light flex items-center justify-center">
                <span className="text-2xl font-bold">3</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Implement</h3>
            <p className="text-white/70">Export to your favorite tools and frameworks with just a few clicks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;