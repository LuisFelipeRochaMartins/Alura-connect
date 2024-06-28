import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import { Prompt } from 'next/font/google'
import './globals.css'
import Search from "@/components/Search";

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Rede Social para Desenvolvedores",
};

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt=br" className={prompt.className}>
      <body>
        <section className="app-container">
          <Sidebar />
          <div className="main-content">
            <Search />
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
