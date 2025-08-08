'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Users, Clock, Star, Shield, Truck, Phone } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const milestones = [
    { year: '1950', event: 'Sweet Store founded by Shri Raman Iyer' },
    { year: '1975', event: 'Expanded to multiple locations across Chennai' },
    { year: '1990', event: 'Introduced modern packaging and preservation techniques' },
    { year: '2010', event: 'Launched online delivery services' },
    { year: '2020', event: 'Expanded nationwide delivery network' },
    { year: '2024', event: 'Serving over 10,000 happy customers monthly' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source only the finest ingredients and maintain the highest quality standards in every product we create.'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every sweet and snack is crafted with care, following traditional recipes passed down through generations.'
    },
    {
      icon: Users,
      title: 'Family Legacy',
      description: 'Three generations of expertise in authentic Indian cuisine, keeping traditions alive while embracing innovation.'
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'All products are made fresh daily to ensure optimal taste, texture, and nutritional value.'
    },
    {
      icon: Shield,
      title: 'Food Safety',
      description: 'We maintain strict hygiene standards and follow all food safety regulations to ensure your health and satisfaction.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Same-day delivery in Chennai and express shipping across India to bring fresh sweets to your doorstep.'
    }
  ];

  const stats = [
    { number: '75+', label: 'Years of Excellence' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '50+', label: 'Product Varieties' },
    { number: '25+', label: 'Cities Served' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-red-200/30 rounded-full blur-xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Story</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Since 1950, Sweet Store has been Chennai's most trusted name for authentic Indian sweets and snacks. 
                What began as a small family business has grown into a beloved brand, yet we've never forgotten our roots.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-8 mb-8"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Journey</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From humble beginnings to becoming Chennai's favorite sweet shop, 
                here are the key milestones in our journey.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 transform md:-translate-x-0.5"></div>
                
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center mb-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-orange-600 rounded-full transform md:-translate-x-2 z-10"></div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <Card className="shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold text-orange-600 mb-2">
                            {milestone.year}
                          </div>
                          <p className="text-gray-700">{milestone.event}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do, from sourcing ingredients 
                to serving our customers with the utmost care and respect.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-8 w-8 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our dedicated team of master confectioners and customer service experts 
                work tirelessly to bring you the finest sweets and exceptional service.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: 'Raman Iyer',
                  role: 'Founder & Master Confectioner',
                  image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
                  description: 'With over 50 years of experience, Raman ji continues to oversee quality and maintain our traditional recipes.'
                },
                {
                  name: 'Priya Iyer',
                  role: 'Head of Operations',
                  image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
                  description: 'Leading our daily operations and ensuring every customer receives the best possible experience.'
                },
                {
                  name: 'Arjun Iyer',
                  role: 'Innovation & Technology',
                  image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
                  description: 'Bringing modern technology to traditional processes while preserving the authentic taste and quality.'
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-orange-600 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience Our Legacy?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join thousands of satisfied customers who trust Sweet Store for their 
                special occasions and everyday indulgences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/products">
                    Shop Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600" asChild>
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}