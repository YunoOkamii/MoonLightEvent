import React, { useState } from 'react';
import { Staff as StaffType } from '../types';
import StaffModal from '../components/StaffModal';
import { Sparkles, Users } from 'lucide-react';

const staffMembers: StaffType[] = [
  {
    id: 's1',
    name: 'Lady Moonflower',
    role: 'Mistress of Ceremonies',
    category: 'manager',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
    description: 'A mysterious enchantress from the depths of Ishgard, Lady Moonflower weaves spells of entertainment and delight.',
    schedule: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
  },
  {
    id: 's2',
    name: 'Crystal Rose',
    role: 'Lead Performer',
    category: 'dancer',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80',
    description: 'Trained in the mystical arts of dance in Ul\'dah, Crystal Rose combines traditional techniques with ethereal magic.',
    schedule: ['Tuesday', 'Thursday', 'Saturday'],
    nsfwPreferences: ['No explicit content', 'Elegant performances only'],
  },
  {
    id: 's3',
    name: 'Shadow Whisper',
    role: 'Elite Courtesan',
    category: 'courtesan',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
    description: 'A master of illusion and mystery, Shadow Whisper brings the magic of Doma to our establishment.',
    schedule: ['Wednesday', 'Friday', 'Sunday'],
    nsfwPreferences: ['Tasteful encounters', 'Artistic expression'],
  },
  // Add more staff members for each category...
];

const categories = [
  { id: 'manager', label: 'Management' },
  { id: 'dancer', label: 'Dancers' },
  { id: 'courtesan', label: 'Courtesans' },
  { id: 'bartender', label: 'Bartenders' },
  { id: 'security', label: 'Security' },
  { id: 'dealer', label: 'Dealers' },
  { id: 'dj', label: 'DJs' },
  { id: 'photographer', label: 'Photographers' },
];

export default function Staff() {
  const [selectedStaff, setSelectedStaff] = useState<StaffType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredStaff = selectedCategory
    ? staffMembers.filter(member => member.category === selectedCategory)
    : staffMembers;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Our Enchanting Cast
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Meet the extraordinary souls who bring magic and wonder to Moonlight Haven.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                !selectedCategory
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-900/50 text-purple-300 hover:bg-purple-800/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>All</span>
              </div>
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-900/50 text-purple-300 hover:bg-purple-800/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={16} />
                  <span>{category.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStaff.map(member => (
            <div 
              key={member.id}
              className="group relative cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedStaff(member)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
                <div className="relative">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 relative">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="text-purple-400" size={20} />
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-900/50 text-purple-200 border border-purple-500/30">
                        {member.role}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 line-clamp-2">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedStaff && (
        <StaffModal 
          staff={selectedStaff}
          onClose={() => setSelectedStaff(null)}
        />
      )}
    </div>
  );
}