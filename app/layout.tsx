import React from "react";
import "@styles/globals.css";

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
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
