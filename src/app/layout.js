import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Providers from "./Providers";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is a move database clone",
};

{
  /* Layout: Defining componentas in the layout will be available on all pages in the app */
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
