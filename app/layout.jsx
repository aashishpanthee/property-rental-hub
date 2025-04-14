import "@/assets/styles/globals.css";
import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "Property Rental Hub",
  keywords: ["property", "rental", "real estate", "real estate rental hub"],
  description: "Find the best properties for your next home",
};

function MainLayout({ children }) {
  return (
    <html lang='en'>
      <body className='font-Poppins'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default MainLayout;
