import type { Metadata } from "next";
import { Nunito, Montserrat } from "next/font/google";
import "@/shared/styles/base/normalize.scss";
import "@/shared/styles/base/globals.scss";
import { QueryRouter } from "./routers/QueryRouter";

const NunitoSans = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"]
});

const MontserratSans = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "F.palace",
  description: "An elegant restaurant offering a refined menu of international cuisine and classic cocktails. Perfect for romantic dinners, business lunches, and special celebrations.  For an unforgettable dining experience in F.palace.",
  keywords: ["F.palace", "fine dining", "romantic dinner", "business lunch", "special occasions", "gourmet"],
  authors: {
    name: "BlackDarkes(DaniilGordeev)"
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NunitoSans.variable} ${MontserratSans.variable}`}>
        <QueryRouter>
          { children }
        </QueryRouter>
      </body>
    </html>
  );
}
