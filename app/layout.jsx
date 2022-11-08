import { DM_Sans } from "@next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const dmsans = DM_Sans({
  weight: ["400", "500", "700"],
  variable: "--font-dmsans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmsans.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="font-dmsans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
