import Footer from "@/components/containers/Footer";
import Header from "@/components/containers/Header";

export const metadata = {
  title: "automative",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-800 min-h-screen text-white">
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
