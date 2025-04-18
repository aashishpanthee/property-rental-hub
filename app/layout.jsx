import "@/assets/styles/globals.css";
import { Footer, Navbar } from "@/components";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Property Rental Hub",
  keywords: ["property", "rental", "real estate", "real estate rental hub"],
  description: "Find the best properties for your next home",
};

function MainLayout({ children }) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className='font-Poppins min-h-screen flex flex-col'>
          <Navbar />
          <main className='flex-1'>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}

export default MainLayout;
