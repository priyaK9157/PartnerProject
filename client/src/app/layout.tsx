"use client"
import "./globals.css";
import {SessionProvider} from "next-auth/react"
import { Providers } from "../GlobalRedux/provider";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
// import { UserProvider } from '@auth0/nextjs-auth0/client';


const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "projectPartner",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    
      <Providers>
        <html lang="en">
          <body className={inter.className}>
          <SessionProvider>
            <Toaster />
            {children}
            </SessionProvider>
          </body>
        </html>
      </Providers>
    
  );
}
