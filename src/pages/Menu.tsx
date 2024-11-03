import React from 'react';
import { Wine, Coffee, UtensilsCrossed } from 'lucide-react';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  {
    id: 'c1',
    name: 'Moonlit Martini',
    description: 'A shimmering blend of gin, vermouth, and stardust bitters',
    price: 12,
    category: 'Cocktails'
  },
  {
    id: 'c2',
    name: 'Crystal Rose',
    description: 'Vodka, rose liqueur, and edible crystal garnish',
    price: 14,
    category: 'Cocktails'
  },
  {
    id: 'c3',
    name: 'Eorzean Sunset',
    description: 'Rum, tropical juices, and floating fire crystal',
    price: 13,
    category: 'Cocktails'
  },
  {
    id: 's1',
    name: 'Starlight Sparkle',
    description: 'Sparkling water with elderflower and citrus',
    price: 6,
    category: 'Soft Drinks'
  },
  {
    id: 's2',
    name: 'Crystal Clear',
    description: 'Premium mineral water from Coerthas springs',
    price: 4,
    category: 'Soft Drinks'
  },
  {
    id: 'f1',
    name: 'Golden Saucer Platter',
    description: 'Assorted luxury appetizers and finger foods',
    price: 25,
    category: 'Food'
  },
  {
    id: 'f2',
    name: 'Ul\'dah Delicacies',
    description: 'Premium selection of exotic sweets',
    price: 18,
    category: 'Food'
  }
];

function MenuSection({ 
  title, 
  icon: Icon, 
  items 
}: { 
  title: string;
  icon: React.ElementType;
  items: MenuItem[];
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Icon size={24} className="text-purple-400" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div 
            key={item.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {item.name}
              </h3>
              <span className="text-purple-600 dark:text-purple-400 font-bold">
                {item.price} gil
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Our Menu
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Indulge in our carefully curated selection of drinks and delicacies, 
          crafted to enhance your evening of entertainment and pleasure.
        </p>
      </div>

      <MenuSection 
        title="Signature Cocktails" 
        icon={Wine}
        items={menuItems.filter(item => item.category === 'Cocktails')}
      />

      <MenuSection 
        title="Non-Alcoholic Beverages" 
        icon={Coffee}
        items={menuItems.filter(item => item.category === 'Soft Drinks')}
      />

      <MenuSection 
        title="Gourmet Delights" 
        icon={UtensilsCrossed}
        items={menuItems.filter(item => item.category === 'Food')}
      />
    </div>
  );
}