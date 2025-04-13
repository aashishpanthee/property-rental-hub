import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse",
  keywords: ["property", "pulse", "real estate", "real estate pulse"],
  description: "Find the best properties for your next home",
};

function MainLayout({ children }) {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

export default MainLayout;
