import { Metadata } from 'next';
import { Sen } from "next/font/google";
import './global.css';

const sen = Sen({ style: 'normal', subsets: ['latin'], variable: '--font-family' });

export const metadata: Metadata = {
  title: "Lab 1x Dev",
  description: "This is the lab app for testing exported packages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sen.variable}`}>
        {children}
      </body>
    </html>
  );
}
