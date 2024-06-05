import { Urbanist } from "next/font/google";
import "./globals.css";
import { TopNav } from "./components/TopNav";
import { BottomNav } from "./components/BottomNav";
import Footer from "./components/Footer";
import { SidebarProvider } from "./providers";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "TrendLuxe",
  description: "Elevate Your Style with the Latest in Trendy and Luxurious Fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${urbanist.className} max-w-[1440px]`}>
        <SidebarProvider>

        <div>
          <div className="fixed inset-x-0 z-[10] border-b-0 shadow-transparent bg-white">
            <TopNav />
            <BottomNav />
          </div>
        </div>
        <div className="pt-40 min-h-screen">
          {children}
        
        </div>
        
        <Footer />
        </SidebarProvider>
      </body>
    </html>
  );
}
