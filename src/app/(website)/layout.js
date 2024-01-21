import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seelinks",
  description: "Your links at one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"></link></head>

      <body className={inter.className}>
        <main>
          <Header />  
          <div className=" p-6 max-w-4xl mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
