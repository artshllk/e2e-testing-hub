import Header from "@/components/containers/Header";

export const metadata = {
  title: "Article",
  description: "Article by ASH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-800 min-h-screen text-white">
        <Header />
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
