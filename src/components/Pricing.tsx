import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

type PlanFeature = {
  text: string;
  included: boolean;
};

type PricingPlan = {
  name: string;
  price: {
    monthly: string;
    yearly: string;
  };
  description: string;
  features: PlanFeature[];
  cta: string;
  popular?: boolean;
};

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: {
      monthly: "$19",
      yearly: "$15",
    },
    description: "Perfect for individuals and small teams just getting started.",
    features: [
      { text: "Up to 3 team members", included: true },
      { text: "Basic design system management", included: true },
      { text: "Component library", included: true },
      { text: "Standard support", included: true },
      { text: "Version history (30 days)", included: true },
      { text: "Advanced collaboration tools", included: false },
      { text: "API access", included: false },
      { text: "White labeling", included: false },
    ],
    cta: "Start with Starter",
  },
  {
    name: "Professional",
    price: {
      monthly: "$49",
      yearly: "$39",
    },
    description: "Ideal for growing teams that need more collaboration features.",
    features: [
      { text: "Up to 10 team members", included: true },
      { text: "Advanced design system management", included: true },
      { text: "Expanded component library", included: true },
      { text: "Priority support", included: true },
      { text: "Unlimited version history", included: true },
      { text: "Advanced collaboration tools", included: true },
      { text: "API access", included: true },
      { text: "White labeling", included: false },
    ],
    cta: "Go Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    price: {
      monthly: "$99",
      yearly: "$79",
    },
    description: "For organizations that need advanced features and dedicated support.",
    features: [
      { text: "Unlimited team members", included: true },
      { text: "Enterprise design system management", included: true },
      { text: "Full component library", included: true },
      { text: "Dedicated support", included: true },
      { text: "Unlimited version history", included: true },
      { text: "Advanced collaboration tools", included: true },
      { text: "Advanced API access", included: true },
      { text: "White labeling & custom domain", included: true },
    ],
    cta: "Contact Sales",
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);
  const pricingRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = pricingRef.current?.querySelectorAll('.pricing-card');
            cards?.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-scale-in');
                card.classList.add('opacity-100');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="pricing" ref={pricingRef} className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-purple/10 to-transparent opacity-50" style={{ top: '30%' }}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-white/70 mb-8">Choose the plan that fits your team's needs, with no hidden fees or surprises.</p>
          
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${!isYearly ? 'text-white' : 'text-white/70'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-24 h-7 rounded-full bg-gray-800"
            >
              <div
                className={`w-6 h-6 mt-0 rounded-full bg-purple transition-transform duration-500 transform ${
                  isYearly ? 'translate-x-16' : 'translate-x-2'
                }`}
              ></div>
            </button>
            <span className={`ml-3 ${isYearly ? 'text-white' : 'text-white/60'}`}>
              Yearly <span className="text-purple-light text-sm font-medium">Save 20%</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {plans.map((plan, index) => (
            <div 
              key={plan.name} 
              className={`pricing-card opacity-0 relative glass-card rounded-2xl overflow-hidden 
                ${plan.popular ? 'border-purple/50 shadow-glow-purple' : 'border-white/35'} 
                hover:scale-105 transition-transform duration-300 ease-in-out`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-purple text-white/95 text-xs font-medium py-1 px-3 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">
                    {isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-white/60">/month</span>
                </div>
                <p className="text-white/70 mb-6">{plan.description}</p>
                
                <Button 
                  className={`w-full py-6 mb-8 transition-colors duration-300 rounded-2xl ${
                    plan.popular 
                      ? 'bg-purple hover:bg-purple-dark' 
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {plan.cta}
                </Button>
                
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check 
                        className={`h-5 w-5 mr-3 mt-0.5 ${
                          feature.included ? 'text-purple-light' : 'text-white/30'
                        }`} 
                      />
                      <span className={feature.included ? 'text-white/90' : 'text-white/40'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/60">
            All plans include: 24/7 uptime monitoring, secure data storage, and regular updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;