'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Users, Clock } from 'lucide-react';

export function BrandStory() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest ingredients sourced directly from trusted suppliers'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every sweet and snack is crafted with care and traditional methods'
    },
    {
      icon: Users,
      title: 'Family Legacy',
      description: 'Three generations of expertise in authentic Indian cuisine'
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'All products made fresh daily to ensure optimal taste and quality'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since 1950, Sweet Store has been a cherished name in authentic Indian sweets and snacks. 
                What started as a small family business has grown into a trusted brand, yet we've never 
                forgotten our roots - the traditional recipes, the personal touch, and the commitment 
                to quality that made us who we are today.
              </p>
              <p className="text-gray-600">
                Our master confectioners continue to use time-honored techniques, ensuring every bite 
                carries the authentic taste of India. From festival celebrations to everyday indulgences, 
                we're honored to be part of your sweetest memories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/8879227/pexels-photo-8879227.jpeg"
                  alt="Traditional cooking"
                  className="w-full h-40 object-cover rounded-xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/7937663/pexels-photo-7937663.jpeg"
                  alt="Fresh ingredients"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="pt-8 space-y-4">
                <img
                  src="https://images.pexels.com/photos/7937664/pexels-photo-7937664.jpeg"
                  alt="Artisan at work"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/7937665/pexels-photo-7937665.jpeg"
                  alt="Traditional sweets"
                  className="w-full h-40 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-2xl opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}