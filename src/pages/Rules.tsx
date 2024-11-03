import React from 'react';
import { Shield, Heart, Camera, Sparkles } from 'lucide-react';

const rules = [
  {
    icon: Shield,
    title: 'General Conduct',
    rules: [
      'Treat all staff and guests with respect',
      'No harassment or inappropriate behavior',
      'Follow staff instructions at all times',
      'No weapons or illegal substances'
    ]
  },
  {
    icon: Heart,
    title: 'Interaction Guidelines',
    rules: [
      'Ask for consent before any interaction',
      'Respect personal boundaries',
      'No solicitation of any kind',
      'Keep conversations appropriate'
    ]
  },
  {
    icon: Camera,
    title: 'Photography Policy',
    rules: [
      'No photography without consent',
      'Staff must approve all photos',
      'No recording devices allowed',
      'Respect privacy of all guests'
    ]
  },
  {
    icon: Sparkles,
    title: 'Dress Code',
    rules: [
      'Smart casual or formal attire required',
      'No revealing or offensive clothing',
      'Clean and well-maintained appearance',
      'Theme-appropriate costumes welcome'
    ]
  }
];

export default function Rules() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
        House Rules
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        To ensure everyone's comfort and safety, we kindly ask all guests to follow these guidelines.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {rules.map(section => {
          const Icon = section.icon;
          return (
            <div 
              key={section.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon size={24} className="text-purple-400" />
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-2">
                {section.rules.map(rule => (
                  <li 
                    key={rule}
                    className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                  >
                    <span className="text-purple-400 mt-1">•</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}