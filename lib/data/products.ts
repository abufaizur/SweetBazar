import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Traditional Sweets',
    description: 'Classic Indian sweets made with authentic recipes',
    image_url: 'https://images.pexels.com/photos/7937666/pexels-photo-7937666.jpeg',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Savory Snacks',
    description: 'Crispy and flavorful traditional snacks',
    image_url: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Dry Fruits & Nuts',
    description: 'Premium quality dry fruits and nuts',
    image_url: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Festival Specials',
    description: 'Special sweets for festivals and celebrations',
    image_url: 'https://images.pexels.com/photos/8879227/pexels-photo-8879227.jpeg',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '5',
    name: 'Bengali Sweets',
    description: 'Authentic Bengali delicacies',
    image_url: 'https://images.pexels.com/photos/7937663/pexels-photo-7937663.jpeg',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '6',
    name: 'South Indian Specials',
    description: 'Traditional South Indian sweets and snacks',
    image_url: 'https://images.pexels.com/photos/7937664/pexels-photo-7937664.jpeg',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

export const products: Product[] = [
  // Traditional Sweets
  {
    id: '1',
    name: 'Gulab Jamun',
    description: 'Soft, spongy milk dumplings soaked in aromatic sugar syrup',
    price: 299.00,
    compare_at_price: 349.00,
    category_id: '1',
    category: categories[0],
    image_url: 'https://images.pexels.com/photos/7937666/pexels-photo-7937666.jpeg',
    images: [
      'https://images.pexels.com/photos/8879231/pexels-photo-8879231.jpeg',
      'https://images.pexels.com/photos/7937665/pexels-photo-7937665.jpeg'
    ],
    stock_quantity: 50,
    weight: '500g',
    ingredients: 'Milk powder, flour, ghee, sugar, cardamom, rose water',
    nutritional_info: 'Energy: 250 kcal per 100g, Protein: 6g, Carbs: 45g, Fat: 8g',
    is_featured: true,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Rasgulla',
    description: 'Classic Bengali cottage cheese balls in sugar syrup',
    price: 249.00,
    compare_at_price: 299.00,
    category_id: '1',
    category: categories[0],
    image_url: 'https://images.pexels.com/photos/8879231/pexels-photo-8879231.jpeg',
    stock_quantity: 45,
    weight: '500g',
    ingredients: 'Fresh paneer, sugar, cardamom',
    is_featured: true,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Kaju Katli',
    description: 'Premium cashew fudge with silver leaf',
    price: 599.00,
    compare_at_price: 699.00,
    category_id: '1',
    category: categories[0],
    image_url: 'https://images.pexels.com/photos/7937665/pexels-photo-7937665.jpeg',
    stock_quantity: 30,
    weight: '250g',
    ingredients: 'Cashews, sugar, ghee, silver leaf',
    is_featured: true,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Motichoor Laddu',
    description: 'Traditional gram flour pearls shaped into sweet balls',
    price: 199.00,
    category_id: '1',
    category: categories[0],
    image_url: 'https://images.pexels.com/photos/8879227/pexels-photo-8879227.jpeg',
    stock_quantity: 60,
    weight: '250g',
    ingredients: 'Gram flour, sugar, ghee, cardamom, almonds',
    is_featured: false,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  // Savory Snacks
  {
    id: '5',
    name: 'Murukku',
    description: 'Crispy spiral-shaped rice and lentil snack',
    price: 149.00,
    category_id: '2',
    category: categories[1],
    image_url: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    stock_quantity: 40,
    weight: '200g',
    ingredients: 'Rice flour, urad dal, sesame seeds, salt, oil',
    is_featured: true,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '6',
    name: 'Mixture',
    description: 'Spicy blend of fried lentils, nuts, and spices',
    price: 199.00,
    compare_at_price: 229.00,
    category_id: '2',
    category: categories[1],
    image_url: 'https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg',
    stock_quantity: 35,
    weight: '250g',
    ingredients: 'Chickpea flour, peanuts, curry leaves, spices',
    is_featured: false,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '7',
    name: 'Banana Chips',
    description: 'Crispy kerala-style banana chips',
    price: 129.00,
    category_id: '2',
    category: categories[1],
    image_url: 'https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg',
    stock_quantity: 50,
    weight: '200g',
    ingredients: 'Raw bananas, coconut oil, salt, turmeric',
    is_featured: false,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '8',
    name: 'Thattai',
    description: 'Crunchy South Indian rice crackers',
    price: 159.00,
    category_id: '2',
    category: categories[1],
    image_url: 'https://images.pexels.com/photos/5560788/pexels-photo-5560788.jpeg',
    stock_quantity: 45,
    weight: '200g',
    ingredients: 'Rice flour, urad dal, sesame seeds, asafoetida',
    is_featured: false,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  // Dry Fruits & Nuts
  {
    id: '9',
    name: 'Premium Almonds',
    description: 'California almonds, perfectly roasted',
    price: 399.00,
    compare_at_price: 449.00,
    category_id: '3',
    category: categories[2],
    image_url: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg',
    stock_quantity: 25,
    weight: '250g',
    ingredients: '100% California almonds',
    is_featured: true,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '10',
    name: 'Cashew Nuts',
    description: 'Premium whole cashew nuts from Kerala',
    price: 549.00,
    compare_at_price: 599.00,
    category_id: '3',
    category: categories[2],
    image_url: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg',
    stock_quantity: 20,
    weight: '250g',
    ingredients: '100% Kerala cashews',
    is_featured: false,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '11',
    name: 'Dates',
    description: 'Sweet and chewy Medjool dates',
    price: 299.00,
    category_id: '3',
    category: categories[2],
    image_url: 'https://images.pexels.com/photos/4552979/pexels-photo-4552979.jpeg',
    stock_quantity: 30,
    weight: '500g',
    ingredients: '100% Medjool dates',
    is_featured: false,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '12',
    name: 'Mixed Dry Fruits',
    description: 'Premium assorted dry fruits and nuts',
    price: 699.00,
    compare_at_price: 799.00,
    category_id: '3',
    category: categories[2],
    image_url: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg',
    stock_quantity: 15,
    weight: '500g',
    ingredients: 'Almonds, cashews, dates, figs, apricots',
    is_featured: true,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  // Festival Specials
  {
    id: '13',
    name: 'Diwali Special Box',
    description: 'Assorted traditional sweets for Diwali celebration',
    price: 899.00,
    compare_at_price: 999.00,
    category_id: '4',
    category: categories[3],
    image_url: 'https://images.pexels.com/photos/8879227/pexels-photo-8879227.jpeg',
    stock_quantity: 20,
    weight: '1kg',
    ingredients: 'Mixed traditional sweets, dry fruits',
    is_featured: true,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '14',
    name: 'Holi Color Sweets',
    description: 'Colorful sweets perfect for Holi festival',
    price: 449.00,
    category_id: '4',
    category: categories[3],
    image_url: 'https://images.pexels.com/photos/7937664/pexels-photo-7937664.jpeg',
    stock_quantity: 25,
    weight: '500g',
    ingredients: 'Natural colors, traditional sweets',
    is_featured: false,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  // Bengali Sweets
  {
    id: '15',
    name: 'Mishti Doi',
    description: 'Traditional Bengali sweet yogurt',
    price: 179.00,
    category_id: '5',
    category: categories[4],
    image_url: 'https://images.pexels.com/photos/7937663/pexels-photo-7937663.jpeg',
    stock_quantity: 40,
    weight: '200g',
    ingredients: 'Milk, sugar, yogurt culture',
    is_featured: true,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '16',
    name: 'Sandesh',
    description: 'Delicate cottage cheese sweet with cardamom',
    price: 249.00,
    compare_at_price: 299.00,
    category_id: '5',
    category: categories[4],
    image_url: 'https://images.pexels.com/photos/8879231/pexels-photo-8879231.jpeg',
    stock_quantity: 35,
    weight: '250g',
    ingredients: 'Fresh paneer, sugar, cardamom',
    is_featured: false,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  // South Indian Specials
  {
    id: '17',
    name: 'Mysore Pak',
    description: 'Rich gram flour sweet from Karnataka',
    price: 329.00,
    compare_at_price: 379.00,
    category_id: '6',
    category: categories[5],
    image_url: 'https://images.pexels.com/photos/7937664/pexels-photo-7937664.jpeg',
    stock_quantity: 30,
    weight: '250g',
    ingredients: 'Gram flour, ghee, sugar',
    is_featured: true,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '18',
    name: 'Coconut Barfi',
    description: 'Fresh coconut fudge with cardamom',
    price: 199.00,
    category_id: '6',
    category: categories[5],
    image_url: 'https://images.pexels.com/photos/7937665/pexels-photo-7937665.jpeg',
    stock_quantity: 40,
    weight: '250g',
    ingredients: 'Fresh coconut, condensed milk, cardamom',
    is_featured: false,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

export function getProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.is_featured);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.category_id === categoryId);
}

export function getCategories(): Category[] {
  return categories;
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(category => category.id === id);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.ingredients?.toLowerCase().includes(lowercaseQuery)
  );
}