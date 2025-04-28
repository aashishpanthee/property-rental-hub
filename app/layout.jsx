import "@/assets/styles/globals.css";
import { AuthProvider, Footer, Navbar } from "@/components";
import { GlobalContextProvider } from "@/context/GlobalContext";
import "photoswipe/dist/photoswipe.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Property Rental Hub",
  keywords: ["property", "rental", "real estate", "real estate rental hub"],
  description: "Find the best properties for your next home",
};

function MainLayout({ children }) {
  return (
    <AuthProvider>
      <GlobalContextProvider>
        <html lang='en'>
          <body className='font-Poppins min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-1'>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalContextProvider>
    </AuthProvider>
  );
}

export default MainLayout;
