import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <section className="pt-32"> 

        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one link<br/> for everything
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Add your links about yourself. your jusivc you videos you rohos etc.
          </h2>
        </div>

        <form className="inline-flex items-center shadow-lg shadow-gray-700/30">
          <span className="bg-white py-4 pl-4 rounded">seelinks.com/</span>
          <input type="text" placeholder="username" className="py-4 rounded" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded py-4 px-6">Join Now</button>
        </form>
        
      </section>
    </main>
  );
}
