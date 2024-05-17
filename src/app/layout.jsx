import { Urbanist } from "next/font/google";
import "./globals.css";
import { TopNav } from "./components/TopNav";
import { BottomNav } from "./components/BottomNav";
import Footer from "./components/Footer";
import HomeProduct from "./components/HomeProduct";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "TrendLuxe",
  description: "Elevate Your Style with the Latest in Trendy and Luxurious Fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <div>
          <TopNav />
          <BottomNav />
        </div>
        <div className="min-h-screen">
          {children}
          <HomeProduct />
        </div>
        
        <Footer />
      </body>
    </html>
  );
}
