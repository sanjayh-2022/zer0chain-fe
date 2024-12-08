"use client"
import { AnonAadhaarProvider } from "@anon-aadhaar/react";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import '../styles/globals.css';
import {Work_Sans} from "next/font/google"

const pirata_One = Work_Sans({
  weight: ['400'],
  subsets: ['latin'],
});



// export const metadata = getMetadata({ title: "Scaffold-ETH 2 App", description: "Built with 🏗 Scaffold-ETH 2" });

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <AnonAadhaarProvider _useTestAadhaar={false} >
          <ThemeProvider enableSystem>
            <ScaffoldEthAppWithProviders><div className={pirata_One.className}>{children}</div></ScaffoldEthAppWithProviders>
          </ThemeProvider>
        </AnonAadhaarProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
