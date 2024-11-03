import React from 'react';
import { Crown, Camera, Music, Wine, Star } from 'lucide-react';

const services = [
  {
    icon: Crown,
    title: 'VIP Experience',
    description: 'Exclusive access to our premium areas, personal attendant service, and priority reservations for private rooms.',
    features: [
      'Private booth seating',
      'Dedicated hostess service',
      'Premium drink selection',
      'Priority room booking'
    ]
  },
  {
    icon: Camera,
    title: 'Photography Services',
    description: 'Professional photography sessions with our in-house photographers.',
    features: [
      'Portrait sessions',
      'Event coverage',
      'Digital delivery',
      'Photo editing'
    ]
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Live performances and special shows throughout the night.',
    features: [
      'Live music',
      'Dance performances',
      'Special guest appearances',
      'Theme nights'
    ]
  },
  {
    icon: Wine,
    title: 'Bottle Service',
    description: 'Premium bottle service with personal mixologist.',
    features: [
      'Premium spirits',
      'Custom cocktails',
      'Tableside service',
      'Mixology experience'
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold magical-text mb-4">Our Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience luxury and entertainment at its finest with our premium services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, description, features }) => (
            <div key={title} className="fantasy-card p-6 group hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-purple-400" size={24} />
                <h2 className="text-2xl font-bold text-white">{title}</h2>
              </div>
              <p className="text-gray-300 mb-6">{description}</p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <Star className="text-purple-400" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}