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
            <a href="/" className="logo">Resume Tailor</a>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/register">Register</a>
              <a href="/login">Login</a>
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