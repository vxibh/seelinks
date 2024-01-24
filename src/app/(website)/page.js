import HeroForm from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <section className="pt-32"> 

        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold tracking-wide  leading-tight">
            One link<br/> for linking everything
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Add your links about yourself. your music and your social media.
          </h2>
        </div>
          <HeroForm user={session?.user} />
      </section>
    </main>
  );
}
