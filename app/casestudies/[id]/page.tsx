"use client";

import GlassCodex from "@/case-studies/glass-codex.mdx";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { MDXProvider } from "@mdx-js/react";

const components = {
  h1: (props: any) => (
    <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: any) => <h2 className="text-3xl font-semibold mb-3" {...props} />,
  h3: (props: any) => (
    <h3 className="text-2xl font-semibold mt-4 mb-2" {...props} />
  ),
  p: (props: any) => (
    <p className="mt-2 text-base text-muted-foreground" {...props} />
  ),
  ul: (props: any) => <ul className="list-disc ml-6 mt-2" {...props} />,
  li: (props: any) => <li className="mt-1" {...props} />,
};

export default function CaseStudyPage() {
  return (
    <div className="bg-[#FFF7E8] min-h-screen">
      <Navigation />
      <main className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        <section className="col-span-4 md:col-span-8 lg:col-span-12 border-l-2 border-r-2 border-[#878787] mt-16 mx-8 lg:mx-32 xl:mx-64 py-16 flex flex-col gap-8">
          <MDXProvider components={components}>
            <div className="flex flex-col px-4 md:px-16 gap-2">
              <GlassCodex />
            </div>
          </MDXProvider>
        </section>
        <Footer />
      </main>
    </div>
  );
}
