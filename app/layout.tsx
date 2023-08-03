import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '../lib/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Define Yourself',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <header className="py-5 px-4">
            <p className="text-xs">DEFINE YOURSELF</p>
          </header>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
