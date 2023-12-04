import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import BusinessAppBar from "./components/BusinessAppBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "HomeShine Solutions, LLC.",
  description:
    "Residential and commerical cleaning, restoration, and repair, serving Greater Boston and the surrounding areas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          src="https://kit.fontawesome.com/d0af135fd0.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        style={{
          margin: 0,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <ThemeProvider theme={theme}>
          <BusinessAppBar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
