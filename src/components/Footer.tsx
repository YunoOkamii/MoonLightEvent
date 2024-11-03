import React from 'react';
import { Twitter, Instagram, MessageCircle, Moon, Sparkles, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-fantasy-gradient border-t border-purple-500/20">
      <div className="absolute inset-0 bg-magical-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <Moon className="text-purple-400" size={24} />
              <h3 className="text-xl font-bold magical-text">Moonlight Haven</h3>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Star size={16} className="text-purple-400" />
              <p>Where dreams take flight</p>
              <Star size={16} className="text-purple-400" />
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://discord.gg/moonlighthaven" className="fantasy-border p-2 rounded-full magical-hover">
              <MessageCircle size={24} className="text-purple-400" />
            </a>
            <a href="https://twitter.com/moonlighthaven" className="fantasy-border p-2 rounded-full magical-hover">
              <Twitter size={24} className="text-purple-400" />
            </a>
            <a href="https://instagram.com/moonlighthaven" className="fantasy-border p-2 rounded-full magical-hover">
              <Instagram size={24} className="text-purple-400" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-purple-500/20 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles size={16} className="text-purple-400" />
            <p className="text-gray-400">Enchanting moments await</p>
            <Sparkles size={16} className="text-purple-400" />
          </div>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Moonlight Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}