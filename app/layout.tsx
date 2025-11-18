import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Jesus Commands - Pray with Authority",
  description: "Learn to pray like Jesus commanded - with authority, not begging. Discover Biblical examples of commanding prayer and activate your faith today.",
  keywords: ["prayer", "healing", "faith", "Jesus", "Christianity", "spiritual authority", "Biblical prayer"],
  authors: [{ name: "Jesus Commands" }],
  openGraph: {
    title: "Jesus Commands - Pray with Authority",
    description: "Learn to pray like Jesus commanded - with authority, not begging.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
