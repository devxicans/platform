import { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import { ViewWrapper } from '../lib';
import './global.css';

const firaCode = Fira_Code({ style: 'normal', subsets: ['latin'], variable: '--font-family' })

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
      <body className={`${firaCode.variable}`}>
        <ViewWrapper>
          {children}
        </ViewWrapper>
      </body>
    </html>
  );
}
