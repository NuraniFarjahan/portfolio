import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Nurani Farjahan | MERN Stack Developer Portfolio',
  description: 'Professional portfolio of Nurani Farjahan, a Full-Stack MERN Developer specializing in scalable web applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased bg-white text-[#111111]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
