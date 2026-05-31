import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/src/providers';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

export const metadata: Metadata = {
  title: 'SecureNet — Аудит безопасности аккаунтов',
  description: 'Образовательный сайт для аудита безопасности аккаунтов в соцсетях Telegram, ВКонтакте и MAX',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
            <Header />
            <main className="flex-1">
              <div className="container mx-auto px-4 py-8 sm:px-6">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
