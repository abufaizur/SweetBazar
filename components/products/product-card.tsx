'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/lib/store/cart';
import { ShoppingCart, Heart, Star, Truck } from 'lucide-react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsLoading(true);
    
    try {
      addItem(product);
      toast.success(`${product.name} added to cart!`, {
        description: `₹${product.price} • ${product.weight || 'Per piece'}`,
      });
    } catch (error) {
      toast.error('Failed to add item to cart');
    } finally {
      setIsLoading(false);
    }
  };

  const discountPercentage = product.compare_at_price 
    ? Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100)
    : 0;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Link href={`/products/${product.id}`}>
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-orange-50">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden">
            <img
              src={imageError ? '/placeholder-product.jpg' : product.image_url}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.is_featured && (
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Featured
                </Badge>
              )}
              {discountPercentage > 0 && (
                <Badge variant="destructive">
                  {discountPercentage}% OFF
                </Badge>
              )}
            </div>

            {/* Quick Actions */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Button
                size="sm"
                variant="outline"
                className="bg-white/90 backdrop-blur-sm"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toast.info('Wishlist feature coming soon!');
                }}
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Stock Status */}
            {product.stock_quantity <= 5 && product.stock_quantity > 0 && (
              <div className="absolute bottom-3 left-3">
                <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                  Only {product.stock_quantity} left
                </Badge>
              </div>
            )}

            {product.stock_quantity === 0 && (
              <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                <Badge variant="destructive" className="text-sm">
                  Out of Stock
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Category */}
            {product.category && (
              <Badge variant="outline" className="text-xs text-orange-600 border-orange-200">
                {product.category.name}
              </Badge>
            )}

            {/* Title */}
            <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>

            {/* Weight/Size */}
            {product.weight && (
              <div className="flex items-center text-xs text-gray-500">
                <Truck className="h-3 w-3 mr-1" />
                {product.weight}
              </div>
            )}

            {/* Pricing */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                  {product.compare_at_price && (
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.compare_at_price}
                    </span>
                  )}
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-orange-400 text-orange-400"
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">(4.9)</span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                size="sm"
                onClick={handleAddToCart}
                disabled={isLoading || product.stock_quantity === 0}
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              >
                {isLoading ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <ShoppingCart className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}