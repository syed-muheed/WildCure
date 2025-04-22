
import "./globals.css";
import "@/public/fonts/wildfonts/stylesheet.css"


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
        {children}
      </body>
    </html>
  );
}
