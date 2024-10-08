import { Inter } from 'next/font/google';
import './global.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'To verdener | Samme mål',
  description: 'To verdener | Samme mål',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
