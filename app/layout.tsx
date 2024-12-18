import "./css/style.css";

import { Inter, Inter_Tight } from "next/font/google";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inter_tight = Inter_Tight({
  weight: ["600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${inter_tight.variable} font-inter antialiased bg-background-dark text-text-dark tracking-tight`}
      >
        <div className="overflow-hidden supports-[overflow:clip]:overflow-clip">
          <div className="max-w-[792px] mx-auto">
            <div className="w-full bg-card-dark border-x border-gray-700 box-content">
              <div className="px-3 md:px-16">
                <div className="flex flex-col min-h-screen">
                  <Header />

                  <main className="grow pt-2 pb-12 space-y-12">{children}</main>

                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
