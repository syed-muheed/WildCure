
import Navbar from "@/components/navbar";
import "./globals.css";
import "@/public/fonts/wildfonts/stylesheet.css"
import Footer from "@/sections/home/footer";


export const metadata = {
  title: "Wildcure Pharma",
  description: "A pharma website",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
