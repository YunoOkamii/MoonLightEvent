import React from 'react';
import { Room } from '../types';

const rooms: Room[] = [
  {
    id: 'r1',
    name: 'Crystal Suite',
    description: 'Our premier private room featuring crystal chandeliers and plush seating.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80',
    capacity: 8,
    pricePerHour: 50,
    amenities: ['Private Bar', 'Dance Floor', 'Premium Sound System', 'VIP Service']
  },
  {
    id: 'r2',
    name: 'Moonlight Lounge',
    description: 'An intimate setting perfect for small gatherings and private conversations.',
    image: 'https://images.unsplash.com/photo-1629371997433-d11e6171636e?auto=format&fit=crop&q=80',
    capacity: 4,
    pricePerHour: 30,
    amenities: ['Comfortable Seating', 'Ambient Lighting', 'Privacy Curtains']
  }
];

export default function Rooms() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
        Private Rooms
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Experience luxury and privacy in our carefully designed private rooms.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {rooms.map(room => (
          <div key={room.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img 
              src={room.image} 
              alt={room.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {room.name}
                </h2>
                <span className="text-purple-600 dark:text-purple-400 font-bold">
                  {room.pricePerHour} gil/hour
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {room.description}
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Capacity:
                </span>
                <span className="font-medium text-gray-800 dark:text-white">
                  {room.capacity} guests
                </span>
              </div>
              <div className="border-t dark:border-gray-700 pt-4">
                <h3 className="font-medium text-gray-800 dark:text-white mb-2">
                  Amenities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {room.amenities.map(amenity => (
                    <span 
                      key={amenity}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}