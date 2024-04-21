import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-pop",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata = {
  title: "EduVerse",
  description: "Gateway to your JECA preparation",
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <title>EduVerse</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content=" The ultimate platform for your JECA preparation"
      />
      <meta
        name="keywords"
        content="GATE, GATE CSE, GATE 2024"
      />{" "}
      <meta name="robots" content="index, follow" />{" "}
      <meta property="og:title" content="EduVerse" />
      <meta
        property="og:description"
        content="The ultimate platform for your GATE preparation"
      />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

    </Head>
      <body className={`${inter.className} ${poppins.variable} font-pop`}>
        <AuthProvider>
          <Header />
          <Toaster position="top-right" />
          <section className="pt-16">
          {children}
          </section>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
