import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prashant Poudel | Full Stack Developer & AI Enthusiast',
  description: 'Portfolio showcasing full stack development and AI/ML expertise',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prashantportfolio.com',
    title: 'Prashant Poudel | Full Stack Developer & AI Enthusiast',
    description: 'Portfolio showcasing full stack development and AI/ML expertise',
    siteName: 'Prashant Portfolio',
    images: [
      {
        url: 'https://johndoe-portfolio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'John Doe Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe | Full Stack Developer & AI Enthusiast',
    description: 'Portfolio showcasing full stack development and AI/ML expertise',
    images: ['https://johndoe-portfolio.com/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}