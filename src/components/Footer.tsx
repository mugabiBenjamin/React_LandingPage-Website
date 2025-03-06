import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-purple/50 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-purple flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
              <span className="font-semibold text-xl">Barrest</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              All-in-one platform to standardize your design workflow and build better products faster than ever before.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={28} />
              </Link>
              <Link to="#" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={27} />
              </Link>
              <Link to="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={26} />
              </Link>
              <Link to="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={25} />
              </Link>
              <Link to="#" className="text-white/60 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={24} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-white/70 hover:text-white transition-colors footer-link">Features</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white transition-colors footer-link">Pricing</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white transition-colors footer-link">Integrations</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white transition-colors footer-link">Changelog</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white transition-colors footer-link">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-white/70 hover:text-white transition-colors footer-link">About</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white transition-colors footer-link">Blog</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white transition-colors footer-link">Careers</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white transition-colors footer-link">Press Kit</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white transition-colors footer-link">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-white/70 hover:text-white transition-colors footer-link">Documentation</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white transition-colors footer-link">Tutorials</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white transition-colors footer-link">Support</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white transition-colors footer-link">API Reference</Link></li>
              <li><Link to="#" className="text-white/70 hover:text-white transition-colors footer-link">Community</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-white/50 text-sm">&copy; {new Date().getFullYear()} Barrest. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="#" className="text-white/50 hover:text-white text-sm transition-colors footer-link">Terms of Service</Link>
            <Link to="#" className="text-white/50 hover:text-white text-sm transition-colors footer-link">Privacy Policy</Link>
            <Link to="#" className="text-white/50 hover:text-white text-sm transition-colors footer-link">Cookies</Link>
            <Link to="#" className="text-white/50 hover:text-white text-sm transition-colors footer-link">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
