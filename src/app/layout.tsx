import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Notification from '../components/Notification';
import '../styles/globals.css';

const openSans = Open_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Massimo',
  description: 'Massas caseiras, preparadas com ingredientes selecionados',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={openSans.className}>
        <Notification />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
