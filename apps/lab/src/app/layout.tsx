import { Metadata } from 'next';
import { Sen } from "next/font/google";
import './global.css';

const sen = Sen({ style: 'normal', subsets: ['latin'], variable: '--font-family' });

export const metadata: Metadata = {
  title: "1x developers | Tech",
  description: "1x developers company, tech that solves problems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sen.variable}`}>{children}</body>
    </html>
  );
}
