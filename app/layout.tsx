import type { Metadata } from "next";
import { Play } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const font = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font",
});

export const metadata: Metadata = {
  title: "Ctrl+Alt+Learn",
  description: "Ctrl+Alt+Learn is",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", font.variable)}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
