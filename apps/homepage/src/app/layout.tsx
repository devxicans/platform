import { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './global.css';
import { ViewWrapper } from './components';
import { Header } from './_shared';

const firaCode = Fira_Code({style: 'normal', subsets: ['latin'], variable: '--font-family'})

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
      <body className={`${firaCode.className}`}>
        <ViewWrapper>
          <Header />
          {children}
        </ViewWrapper>
      </body>
    </html>
  );
}
