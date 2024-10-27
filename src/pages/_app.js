import Header from "@/components/containers/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-slate-800">
      <Component {...pageProps} />
    </div>
  );
}
