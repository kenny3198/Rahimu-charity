import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Charity Website",
  description: "Donate for the needy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
      >
        <div className="relative bg-white selection:bg-sky-500/20">
             {/* Gradient Backgrouund */}
             <div className="fixed min-h-screen">
              <div className="absolute inset-0 h-full
               bg-[radial-gradient(circle_at_center,
               rgba(56,189,248,0.03), transparent_50%)]"/>
              <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04), transparent_70%)]"/>

              </div> 
              </div>
        {children}
       
      </body>
    </html>
  );
}
