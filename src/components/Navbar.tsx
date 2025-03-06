import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/70 backdrop-blur-xl py-4' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-purple/50 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-purple/70 flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"></div>
              </div>
            </div>
            <span className="font-bold text-xl">Barrest</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-semibold">
            <a href="#hero" className="text-sm text-white/80 hover:text-white transition-colors nav-link">Home</a>
            <a href="#features" className="text-sm text-white/80 hover:text-white transition-colors nav-link">Features</a>
            <a href="#showcase" className="text-sm text-white/80 hover:text-white transition-colors nav-link">Product</a>
            <a href="#pricing" className="text-sm text-white/80 hover:text-white transition-colors nav-link">Pricing</a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors nav-link">Blog</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white/80 hover:text-white rounded-2xl transition-all duration-300 ease-in-out">Sign in</Button>
            <Button className="bg-purple hover:bg-purple/50 text-white rounded-2xl transition-all duration-300 ease-in-out">Try free</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white/80 hover:text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <a href="#hero" 
              className="text-white/80 hover:text-white py-2 px-4 transition-colors nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a href="#features" 
              className="text-white/80 hover:text-white py-2 px-4 transition-colors nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a href="#showcase" 
             className="text-white/80 hover:text-white py-2 px-4 transition-colors nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Product
            </a>
            <a href="#pricing" 
              className="text-white/80 hover:text-white py-2 px-4 transition-colors nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a href="#" 
              className="text-white/80 hover:text-white py-2 px-4 transition-colors nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
              <Button variant="ghost" className="justify-start rounded-2xl">Sign in</Button>
              <Button className="bg-purple hover:bg-purple-dark text-white rounded-2xl">Try free</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
