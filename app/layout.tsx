import type { Metadata } from "next";
import { cookies } from 'next/headers'
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "../store/provider";
import Themes from "../utilities/theme";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workflow Management",
  description: "Generated by create next app",
  icons: {
    icon: "https://i.imgur.com/ZlgFNQA.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // Get theme based on the cookie "theme".
  const themeCookie = cookies().get('theme')
  // If the cookie "theme" does not exist, set theme to the first index of Themes.
  const currentTheme = themeCookie ? themeCookie.value : Themes[0]

  return (
    <html lang="en"  data-theme={currentTheme}>
      <body className={`${inter.className} h-screen`}>
        <Provider>
        
          {children}
        </Provider>{" "}
      </body>
    </html>
  );
}
