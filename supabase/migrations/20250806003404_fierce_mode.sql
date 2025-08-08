/*
  # Seed Initial Data

  1. Categories
    - Traditional Sweets
    - Savory Snacks
    - Dry Fruits & Nuts
    - Festival Specials
    - Bengali Sweets
    - South Indian Specials

  2. Sample Products
    - Various traditional Indian sweets and snacks
    - Realistic pricing and descriptions
    - High-quality stock images
*/

-- Insert categories
INSERT INTO categories (name, description, image_url) VALUES
('Traditional Sweets', 'Classic Indian sweets made with authentic recipes', 'https://images.pexels.com/photos/7937666/pexels-photo-7937666.jpeg'),
('Savory Snacks', 'Crispy and flavorful traditional snacks', 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg'),
('Dry Fruits & Nuts', 'Premium quality dry fruits and nuts', 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg'),
('Festival Specials', 'Special sweets for festivals and celebrations', 'https://images.pexels.com/photos/8879227/pexels-photo-8879227.jpeg'),
('Bengali Sweets', 'Authentic Bengali delicacies', 'https://images.pexels.com/photos/7937663/pexels-photo-7937663.jpeg'),
('South Indian Specials', 'Traditional South Indian sweets and snacks', 'https://images.pexels.com/photos/7937664/pexels-photo-7937664.jpeg');

-- Insert sample products
WITH category_ids AS (
  SELECT 
    (SELECT id FROM categories WHERE name = 'Traditional Sweets') as traditional_sweets,
    (SELECT id FROM categories WHERE name = 'Savory Snacks') as savory_snacks,
    (SELECT id FROM categories WHERE name = 'Dry Fruits & Nuts') as dry_fruits,
    (SELECT id FROM categories WHERE name = 'Festival Specials') as festival_specials,
    (SELECT id FROM categories WHERE name = 'Bengali Sweets') as bengali_sweets,
    (SELECT id FROM categories WHERE name = 'South Indian Specials') as south_indian
)
INSERT INTO products (name, description, price, compare_at_price, category_id, image_url, stock_quantity, weight, ingredients, is_featured, is_active) VALUES
-- Traditional Sweets
('Gulab Jamun', 'Soft, spongy milk dumplings soaked in aromatic sugar syrup', 299.00, 349.00, (SELECT traditional_sweets FROM category_ids), 'https://images.pexels.com/photos/7937666/pexels-photo-7937666.jpeg', 50, '500g', 'Milk powder, flour, ghee, sugar, cardamom, rose water', true, true),
('Rasgulla', 'Classic Bengali cottage cheese balls in sugar syrup', 249.00, 299.00, (SELECT traditional_sweets FROM category_ids), 'https://images.pexels.com/photos/8879231/pexels-photo-8879231.jpeg', 45, '500g', 'Fresh paneer, sugar, cardamom', true, true),
('Kaju Katli', 'Premium cashew fudge with silver leaf', 599.00, 699.00, (SELECT traditional_sweets FROM category_ids), 'https://images.pexels.com/photos/7937665/pexels-photo-7937665.jpeg', 30, '250g', 'Cashews, sugar, ghee, silver leaf', true, true),
('Motichoor Laddu', 'Traditional gram flour pearls shaped into sweet balls', 199.00, NULL, (SELECT traditional_sweets FROM category_ids), 'https://images.pexels.com/photos/8879227/pexels-photo-8879227.jpeg', 60, '250g', 'Gram flour, sugar, ghee, cardamom, almonds', false, true),

-- Savory Snacks
('Murukku', 'Crispy spiral-shaped rice and lentil snack', 149.00, NULL, (SELECT savory_snacks FROM category_ids), 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg', 40, '200g', 'Rice flour, urad dal, sesame seeds, salt, oil', true, true),
('Mixture', 'Spicy blend of fried lentils, nuts, and spices', 199.00, 229.00, (SELECT savory_snacks FROM category_ids), 'https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg', 35, '250g', 'Chickpea flour, peanuts, curry leaves, spices', false, true),
('Banana Chips', 'Crispy kerala-style banana chips', 129.00, NULL, (SELECT savory_snacks FROM category_ids), 'https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg', 50, '200g', 'Raw bananas, coconut oil, salt, turmeric', false, true),
('Thattai', 'Crunchy South Indian rice crackers', 159.00, NULL, (SELECT savory_snacks FROM category_ids), 'https://images.pexels.com/photos/5560788/pexels-photo-5560788.jpeg', 45, '200g', 'Rice flour, urad dal, sesame seeds, asafoetida', false, true),

-- Dry Fruits & Nuts
('Premium Almonds', 'California almonds, perfectly roasted', 399.00, 449.00, (SELECT dry_fruits FROM category_ids), 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg', 25, '250g', '100% California almonds', true, true),
('Cashew Nuts', 'Premium whole cashew nuts from Kerala', 549.00, 599.00, (SELECT dry_fruits FROM category_ids), 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg', 20, '250g', '100% Kerala cashews', false, true),
('Dates', 'Sweet and chewy Medjool dates', 299.00, NULL, (SELECT dry_fruits FROM category_ids), 'https://images.pexels.com/photos/4552979/pexels-photo-4552979.jpeg', 30, '500g', '100% Medjool dates', false, true),
('Mixed Dry Fruits', 'Premium assorted dry fruits and nuts', 699.00, 799.00, (SELECT dry_fruits FROM category_ids), 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg', 15, '500g', 'Almonds, cashews, dates, figs, apricots', true, true),

-- Festival Specials
('Diwali Special Box', 'Assorted traditional sweets for Diwali celebration', 899.00, 999.00, (SELECT festival_specials FROM category_ids), 'https://images.pexels.com/photos/8879227/pexels-photo-8879227.jpeg', 20, '1kg', 'Mixed traditional sweets, dry fruits', true, true),
('Holi Color Sweets', 'Colorful sweets perfect for Holi festival', 449.00, NULL, (SELECT festival_specials FROM category_ids), 'https://images.pexels.com/photos/7937664/pexels-photo-7937664.jpeg', 25, '500g', 'Natural colors, traditional sweets', false, true),

-- Bengali Sweets
('Mishti Doi', 'Traditional Bengali sweet yogurt', 179.00, NULL, (SELECT bengali_sweets FROM category_ids), 'https://images.pexels.com/photos/7937663/pexels-photo-7937663.jpeg', 40, '200g', 'Milk, sugar, yogurt culture', true, true),
('Sandesh', 'Delicate cottage cheese sweet with cardamom', 249.00, 299.00, (SELECT bengali_sweets FROM category_ids), 'https://images.pexels.com/photos/8879231/pexels-photo-8879231.jpeg', 35, '250g', 'Fresh paneer, sugar, cardamom', false, true),

-- South Indian Specials
('Mysore Pak', 'Rich gram flour sweet from Karnataka', 329.00, 379.00, (SELECT south_indian FROM category_ids), 'https://images.pexels.com/photos/7937664/pexels-photo-7937664.jpeg', 30, '250g', 'Gram flour, ghee, sugar', true, true),
('Coconut Barfi', 'Fresh coconut fudge with cardamom', 199.00, NULL, (SELECT south_indian FROM category_ids), 'https://images.pexels.com/photos/7937665/pexels-photo-7937665.jpeg', 40, '250g', 'Fresh coconut, condensed milk, cardamom', false, true);