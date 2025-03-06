import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay: string;
};

const Testimonial = ({ quote, author, role, company, delay }: TestimonialProps) => (
  <div 
    className="testimonial glass-card p-8 rounded-xl opacity-0 transform translate-y-8"
    style={{ transitionDelay: delay }}
  >
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
      ))}
    </div>
    <p className="text-white/90 mb-6">{quote}</p>
    <div>
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-white/70">{role}, {company}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = testimonialsRef.current?.querySelectorAll('.testimonial');
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
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={testimonialsRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple/10 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by design teams worldwide</h2>
          <p className="text-white/70">See what our customers have to say about their experience with our platform.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial
            quote="This platform has completely transformed how our design and development teams collaborate. We've reduced our design-to-development time by over 60%."
            author="Alex Rivera"
            role="Design Lead"
            company="Acme Inc."
            delay="0ms"
          />
          
          <Testimonial
            quote="The ability to manage our entire design system in one place has been game-changing. Our consistency across products has never been better."
            author="Sarah Johnson"
            role="Product Manager"
            company="TechFlow"
            delay="100ms"
          />
          
          <Testimonial
            quote="We've been able to scale our design operations while maintaining quality and consistency. The ROI has been incredible."
            author="Michael Chen"
            role="CTO"
            company="GrowthLab"
            delay="200ms"
          />
          
          <Testimonial
            quote="As a growing startup, having all our design assets in one place that both designers and developers can access has been invaluable."
            author="Priya Patel"
            role="Founder"
            company="LaunchPad"
            delay="300ms"
          />
          
          <Testimonial
            quote="The automation features alone have saved us countless hours. Our team can focus on creating rather than managing files and versions."
            author="Thomas Wright"
            role="Senior Designer"
            company="CreativeForce"
            delay="400ms"
          />
          
          <Testimonial
            quote="The onboarding experience was seamless, and the support team has been incredible. Couldn't recommend this platform more highly."
            author="Emma Garcia"
            role="Design Systems Lead"
            company="Innovate Co."
            delay="500ms"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
