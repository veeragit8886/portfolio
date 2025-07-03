import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Veera Narayana - Web Developer Portfolio',
  description: 'Fresher Web Developer | Intern @ VBLP Technologies. Skilled in React, Next.js, and API development. Passionate about creating beautiful, functional web applications.',
  keywords: 'web developer, react, next.js, frontend, backend, fullstack, portfolio, internship',
  authors: [{ name: 'Veera Narayana' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}