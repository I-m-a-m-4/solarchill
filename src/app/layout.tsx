import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'SolarChill Solutions | Sustainable Cooling',
  description: 'Discover the Solar Powered Cold Box—an innovative, off-grid refrigeration solution designed to reduce waste and create opportunities for communities in need. Cooling powered by the sun.',
  keywords: ['solar power', 'cold storage', 'refrigeration', 'sustainable', 'off-grid', 'food waste', 'agriculture'],
  icons: {
    icon: '/icon.png',
  },
};

function GlowingBlob({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={cn(
        "absolute -z-10 rounded-full bg-primary/10 blur-[120px] filter",
        className
      )}
      style={style}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full bg-neutral-950">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full">
        <div className="relative isolate overflow-x-clip flex-grow">
          <GlowingBlob className="top-[-10rem] left-[-20rem] h-[40rem] w-[60rem]" />
          <GlowingBlob className="bottom-[-15rem] right-[-25rem] h-[40rem] w-[60rem] bg-accent/10" />
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
