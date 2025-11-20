import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Target, Heart, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from teaching to student support.'
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We create a caring environment where every student feels valued and supported.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new technologies and teaching methods to enhance learning.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build strong relationships between students, teachers, and families.'
    }
  ];

  const stats = [
    { value: '25+', label: 'Years of Excellence' },
    { value: '500+', label: 'Active Students' },
    { value: '50+', label: 'Expert Teachers' },
    { value: '95%', label: 'Success Rate' }
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Empowering Education Through Innovative Technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                At website, we are committed to providing a world-class education that prepares students for success in an ever-changing world. Our mission is to foster a love of learning, develop critical thinking skills, and nurture the unique talents of every student.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We believe that education is the foundation for a better future. Through innovative teaching methods, cutting-edge technology, and a supportive community, we empower students to reach their full potential and become responsible global citizens.
              </p>
              <p className="text-lg text-gray-600">
                Our comprehensive platform brings together students, teachers, and parents in a collaborative environment that enhances learning outcomes and strengthens the educational experience for everyone involved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center group hover:border-primary border-2 border-transparent"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="School building"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our History</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded over 25 years ago, our school has been a pillar of educational excellence in the community. What started as a small institution with a handful of students has grown into a thriving educational hub serving hundreds of families.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Throughout our history, we have consistently adapted to meet the changing needs of students and society. From embracing digital learning tools to implementing innovative teaching methodologies, we have always been at the forefront of educational advancement.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to build on our legacy of excellence, preparing students not just for academic success, but for meaningful lives as engaged citizens and lifelong learners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
