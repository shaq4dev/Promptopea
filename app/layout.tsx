import React from "react";
import "@styles/globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Promptopea",
  description: "Discover and share AI prompts",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
