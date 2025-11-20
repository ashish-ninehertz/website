import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Filter } from 'lucide-react';
import { MOCK_EVENTS } from '../lib/mockData';
import { format } from 'date-fns';

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState<string>('all');

  const eventTypes = ['all', 'academic', 'sports', 'cultural', 'holiday', 'meeting'];

  const filteredEvents = selectedType === 'all'
    ? MOCK_EVENTS
    : MOCK_EVENTS.filter(event => event.type === selectedType);

  const getEventColor = (type: string) => {
    const colors: Record<string, string> = {
      academic: 'bg-primary',
      sports: 'bg-success',
      cultural: 'bg-accent',
      holiday: 'bg-error',
      meeting: 'bg-secondary'
    };
    return colors[type] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">School Events</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Stay updated with all upcoming school events, holidays, and important dates
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-700">Filter by type:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                    selectedType === type
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:border-primary border-2 border-transparent"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-primary mb-1">
                      {format(new Date(event.date), 'd')}
                    </div>
                    <div className="text-sm text-gray-500 uppercase">
                      {format(new Date(event.date), 'MMM yyyy')}
                    </div>
                  </div>
                  <span className={`px-3 py-1 ${getEventColor(event.type)} text-white rounded-full text-sm font-medium capitalize`}>
                    {event.type}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <button className="btn-secondary w-full mt-4">
                  Add to Calendar
                </button>
              </motion.div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-500">No events found for this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
