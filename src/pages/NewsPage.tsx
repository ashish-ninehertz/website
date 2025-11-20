import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, Tag } from 'lucide-react';
import { MOCK_NEWS } from '../lib/mockData';
import { format } from 'date-fns';

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'announcement', 'achievement', 'event', 'general'];

  const filteredNews = MOCK_NEWS.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      announcement: 'bg-primary',
      achievement: 'bg-success',
      event: 'bg-accent',
      general: 'bg-secondary'
    };
    return colors[category] || 'bg-gray-500';
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Stay informed with the latest news, announcements, and achievements from our school
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input pl-12"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4 mb-6">
              <Tag className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-700">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 ${getCategoryColor(article.category)} text-white px-3 py-1 rounded-full text-sm font-medium capitalize`}>
                    {article.category}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{format(new Date(article.publishedAt), 'MMM d, yyyy')}</span>
                  </div>
                </div>

                <button className="btn-secondary w-full">
                  Read More
                </button>
              </motion.div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-500">No news articles found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
