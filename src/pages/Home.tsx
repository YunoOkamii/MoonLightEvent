import React from 'react';
import { MapPin, Clock } from 'lucide-react';

function EventCountdown() {
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const nextEvent = new Date('2024-03-15T20:00:00'); // Example date
    const difference = nextEvent.getTime() - new Date().getTime();
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
    };
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center">
      <div className="text-center">
        <div className="text-4xl font-bold text-purple-400">{timeLeft.days}</div>
        <div className="text-sm text-gray-400">Days</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-purple-400">{timeLeft.hours}</div>
        <div className="text-sm text-gray-400">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-purple-400">{timeLeft.minutes}</div>
        <div className="text-sm text-gray-400">Minutes</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative h-[60vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 magical-text">Moonlight Haven</h1>
            <p className="text-xl mb-8">Where Dreams Take Flight</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Next Event Countdown</h2>
            <EventCountdown />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="fantasy-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">Location</h3>
              </div>
              <p className="text-gray-300">
                Plot 30, Ward 12<br />
                The Lavender Beds<br />
                Gridania
              </p>
            </div>

            <div className="fantasy-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">Opening Hours</h3>
              </div>
              <p className="text-gray-300">
                Monday - Thursday: 8pm - 2am<br />
                Friday - Saturday: 8pm - 4am<br />
                Sunday: 6pm - 12am
              </p>
            </div>
          </div>

          <div className="fantasy-card p-6">
            <img 
              src="https://example.com/map-location.jpg" 
              alt="Location Map"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}