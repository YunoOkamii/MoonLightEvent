import React from 'react';
import { Event } from '../types';

const events: Event[] = [
  {
    id: 'e1',
    title: 'Moonlight Masquerade',
    description: 'An enchanting evening of mystery and dance. Masks required.',
    date: '2024-03-15T20:00:00',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80',
    featured: true
  },
  {
    id: 'e2',
    title: 'Crystal Night',
    description: 'Special performances featuring our star dancers.',
    date: '2024-03-20T21:00:00',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80',
    featured: false
  }
];

export default function Events() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
        Upcoming Events
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Join us for our specially curated events and performances.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map(event => (
          <div 
            key={event.id}
            className={`
              bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden
              ${event.featured ? 'md:col-span-2' : ''}
            `}
          >
            <div className="relative">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              {event.featured && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-purple-600 text-white rounded-full text-sm">
                  Featured Event
                </span>
              )}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {event.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {event.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-purple-600 dark:text-purple-400">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}