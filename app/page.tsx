import { getFeaturedProducts } from '@/lib/data/products';
import { HeroSection } from '@/components/home/hero-section';
import { FeaturedProducts } from '@/components/home/featured-products';
import { BrandStory } from '@/components/home/brand-story';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Product } from '@/types';

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts products={featuredProducts} />
        <BrandStory />
      </main>
      <Footer />
    </div>
  );
}