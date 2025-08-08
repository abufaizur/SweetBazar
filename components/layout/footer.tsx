import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-50 to-red-50 border-t border-orange-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Sweet Store
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Authentic Indian sweets and snacks, made with love and tradition. 
              Bringing the taste of India to your doorstep.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/products" className="block text-gray-600 hover:text-orange-600 transition-colors text-sm">
                All Products
              </Link>
              <Link href="/categories" className="block text-gray-600 hover:text-orange-600 transition-colors text-sm">
                Categories
              </Link>
              <Link href="/about" className="block text-gray-600 hover:text-orange-600 transition-colors text-sm">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-orange-600 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Categories</h3>
            <div className="space-y-2">
              <Link href="/categories/sweets" className="block text-gray-600 hover:text-orange-600 transition-colors text-sm">
                Traditional Sweets
              </Link>
              <Link href="/categories/snacks" className="block text-gray-600 hover:text-orange-600 transition-colors text-sm">
                Savory Snacks
              </Link>
              <Link href="/categories/dry-fruits" className="block text-gray-600 hover:text-orange-600 transition-colors text-sm">
                Dry Fruits & Nuts
              </Link>
              <Link href="/categories/festival" className="block text-gray-600 hover:text-orange-600 transition-colors text-sm">
                Festival Specials
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-600" />
                <span className="text-gray-600 text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-600" />
                <span className="text-gray-600 text-sm">info@sweetstore.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-orange-600 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  123 Sweet Street,<br />
                  Chennai, Tamil Nadu 600001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Sweet Store. All rights reserved. Made with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  );
}