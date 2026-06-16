import "./globals.css";

import { Poppins, Montserrat, Playfair_Display, K2D, Libre_Baskerville, Tinos } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const k2d = K2D({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-k2d",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
});

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tinos",
});

export const metadata = {
  title: "CodeStorm Solutions",
  description: "This is my Next.js website",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} ${playfair.variable} ${k2d.variable} ${libreBaskerville.variable} ${tinos.variable}`}>
        
        {children}
      </body>
    </html>
  );
};

export default RootLayout;