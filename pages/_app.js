import { Toaster } from "react-hot-toast";

import Nav from "@/components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className="py-8 px-6 md:px-16 lg:py-16 lg:px-24">
      <Toaster position="top-center" />
      <Nav />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
