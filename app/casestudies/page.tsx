import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function CaseStudies() {
  return (
    <div className="bg-[#FFF7E8] min-h-screen">
      <Navigation />
      <main className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        <section className="col-span-4 md:col-span-8 lg:col-span-12 min-h-screen border-l-2 border-r-2 border-[#878787] px-4 mt-16 mx-8 lg:mx-32 xl:mx-64 py-16 flex flex-col gap-8">
          <h1 className="text-4xl font-bold text-center">Case Studies</h1>

          <a
            href="/casestudies/glass-codex"
            className="border rounded-lg p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">Glass Codex</h2>
            <p className="mt-2 text-muted-foreground line-clamp-7 md:line-clamp-none">
              Glass Codex is a solo-built, character-focused writing web
              application designed for indie game developers and storytellers.
              The project prioritizes fast character creation, low cognitive
              load, and structured organization, with v1 focusing exclusively on
              character management as a foundation for future worldbuilding and
              plot tools.
            </p>
          </a>
        </section>
        <Footer />
      </main>
    </div>
  );
}
