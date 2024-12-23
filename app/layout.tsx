import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import { Header } from "./components/header/Header";
import {Footer} from './components/footer/Footer';
import './globals.scss';
import 'bootstrap/dist/css/bootstrap.css';


const titillium = Titillium_Web({
  weight: ["400","700"],
  subsets:['latin']
});

export const metadata: Metadata = {
  title: "Hooman Hajarian",
  description: "Hooman Hajarian Portfolio and Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={titillium.className}>
        <Header/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
