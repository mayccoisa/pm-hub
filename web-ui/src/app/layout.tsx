import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AIWrapper } from "@/components/AIWrapper";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PM Hub - Portal Wiki e IA",
  description: "Portal integrado de documentação e inteligência agêntica para Product Managers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${inter.className} h-full bg-slate-50`}>
        <AIWrapper>
          <Sidebar />
          <div className="flex-1 flex flex-col h-full overflow-hidden bg-white shadow-xl m-2 rounded-2xl border border-slate-200">
            {children}
          </div>
        </AIWrapper>
      </body>
    </html>
  );
}
