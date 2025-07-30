import Link from 'next/link';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume Tailor',
  description: 'Tailor your resume to match job descriptions using AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/" className="logo">Resume Tailor</Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/register">Register</Link>
              <Link href="/login">Login</Link>
            </div>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}