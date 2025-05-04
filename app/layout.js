import Navbar from "@/components/navbar";
import "./globals.css";
import "@/public/fonts/wildfonts/stylesheet.css";
import Footer from "@/sections/home/footer";
import Commitment from "@/sections/home/commitment";
import Achivements from "@/sections/home/achivements";
import Discover from "@/sections/home/discover";

export const metadata = {
  title: "Wildcure Pharma",
  description: "A pharma website",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased font-monserrat`}>
        <Navbar />
        {children}
        <Commitment />
        <Achivements />
        <Discover />
        <Footer />
      </body>
    </html>
  );
}
