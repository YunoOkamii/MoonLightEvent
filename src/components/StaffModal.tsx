import React from 'react';
import { X, Calendar, Star, Heart } from 'lucide-react';
import { Staff } from '../types';

interface StaffModalProps {
  staff: Staff;
  onClose: () => void;
}

export default function StaffModal({ staff, onClose }: StaffModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div 
        className="relative bg-gradient-to-br from-purple-900 via-gray-900 to-indigo-900 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_15px_rgba(147,51,234,0.3)]"
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
        >
          <X size={24} />
        </button>

        <div className="relative p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <img 
                  src={staff.image} 
                  alt={staff.name}
                  className="relative w-full h-[400px] object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>

            <div className="md:w-1/2 text-white">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {staff.name}
                  </h2>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="text-yellow-400" size={20} />
                    <span className="text-lg text-purple-300">{staff.role}</span>
                  </div>
                </div>

                <div className="prose prose-invert">
                  <p className="text-gray-300 leading-relaxed">
                    {staff.description}
                  </p>
                </div>

                <div className="border-t border-purple-800/50 pt-4">
                  <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 text-purple-300">
                    <Calendar size={20} />
                    Performance Schedule
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {staff.schedule.map(day => (
                      <span 
                        key={day}
                        className="px-3 py-1 rounded-full text-sm bg-purple-900/50 border border-purple-500/30 text-purple-200"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                {staff.nsfwPreferences && (
                  <div className="border-t border-purple-800/50 pt-4">
                    <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 text-purple-300">
                      <Heart size={20} />
                      Preferences
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {staff.nsfwPreferences.map(pref => (
                        <span 
                          key={pref}
                          className="px-3 py-1 rounded-full text-sm bg-pink-900/50 border border-pink-500/30 text-pink-200"
                        >
                          {pref}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}