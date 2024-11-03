import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Star, Sparkles, Coffee, Image, Key } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Star },
  { path: '/menu', label: 'Menu', icon: Coffee },
  { path: '/staff', label: 'Staff', icon: Sparkles },
  { path: '/services', label: 'Services', icon: Star },
  { path: '/rooms', label: 'Rooms', icon: Moon },
  { path: '/events', label: 'Events', icon: Sparkles },
  { path: '/gallery', label: 'Gallery', icon: Image },
  { path: '/mare', label: 'Mare', icon: Key },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="relative z-50 bg-fantasy-gradient border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Moon className="text-purple-400" size={24} />
            <span className="text-xl font-bold magical-text">Moonlight Haven</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-purple-800/50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium
                  transition-all duration-300 magical-hover
                  ${location.pathname === path
                    ? 'bg-purple-600/30 text-purple-300 fantasy-border'
                    : 'text-gray-300 hover:bg-purple-600/20 hover:text-purple-300'
                  }
                `}
              >
                <Icon size={16} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute inset-x-0 top-16 bg-fantasy-gradient border-b border-purple-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`
                    flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium
                    ${location.pathname === path
                      ? 'bg-purple-600/30 text-purple-300 fantasy-border'
                      : 'text-gray-300 hover:bg-purple-600/20 hover:text-purple-300'
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}