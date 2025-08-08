import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/lib/auth/auth-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sweet Store - Authentic Indian Sweets & Snacks',
  description: 'Discover premium quality traditional Indian sweets and snacks, made with authentic recipes and finest ingredients. Free delivery across Chennai.',
  keywords: 'Indian sweets, traditional snacks, Chennai sweets, online sweet shop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: 'white',
                color: 'black',
                border: '1px solid #e5e7eb',
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}