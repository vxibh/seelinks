import { Inter } from "next/font/google";
import "@/app/globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import { redirect } from "next/navigation";
import AppSideBar from "@/components/layout/AppSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seelinks",
  description: "Your links at one place",
};

export default async function AppTemplate({ children }) {

    const session = await getServerSession(authOptions);
    if(!session) {
        return redirect('/');
    }

  return (
    <html lang="en">

      <body className={inter.className}>
        <main className="flex min-h-screen">
          <aside className="bg-white w-48 p-5 shadow-lg">
            <div className="rounded-full overflow-hidden aspect-square w-24 mx-auto m-5">
                <Image src={session?.user?.image} width={256} height={256} alt="user image" />
            </div>
            <div className="text-center">
                <AppSideBar/>
            </div>
          </aside>
          <div className="grow">
            <div className="bg-white m-8 p-4 shadow grow">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
