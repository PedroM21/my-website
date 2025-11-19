import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ProjectAccordion from "@/components/ProjectAccordion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FFF7E8]">
      <Navigation />
      <main className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        {/* Hero */}
        <section
          id="home"
          className="col-span-4 md:col-span-8 lg:col-span-12 border-l-2 border-r-2 border-[#878787] min-h-screen max-w-screen flex flex-col gap-8 justify-center items-center mx-8 lg:mx-32 xl:mx-64"
        >
          <div className="text-center">
            <p className="text-[16px] md:text-[20px]">
              {"< Web Developer & Designer />"}
            </p>
            <h1 className="text-[31.25px] font-semibold md:text-[61.04px] lg:text-[76.03px] xl:text-[95.38px]">
              Pedro Moreno
            </h1>
            <p className="text-[20px] md:text-[31.25px] xl:text-[39.06px] font-semibold">
              Make Your <span className="text-[#6C3483]">Web Presence</span>{" "}
              Known
            </p>
          </div>
          <div className="flex flex-col gap-4 font-semibold md:flex-row md:gap-8">
            <a href="/#contact" aria-label="contact button">
              <button className="bg-[#A28743] p-2 rounded-lg shadow-[0_6px_0_0_rgba(43,43,43,1)] cursor-pointer hover:shadow-[0_9px_0_0_rgba(43,43,43,1)] hover:bg-[#d6b55a]">
                work with me
              </button>
            </a>
            <a href="/#projects" aria-label="view projects button">
              <button className="bg-[#D9D9D9] p-2 rounded-lg shadow-[0_6px_0_0_rgba(43,43,43,1)] cursor-pointer hover:shadow-[0_9px_0_0_rgba(43,43,43,1)] hover:bg-[#b9b9b9]">
                view projects
              </button>
            </a>
          </div>
        </section>
        {/* Services */}
        <section
          id="services"
          className="col-span-4 md:col-span-8 lg:col-span-12 border-l-2 border-r-2 mx-8 border-[#878787] min-h-screen max-w-screen lg:mx-32 xl:mx-64"
        >
          <h1 className="border-t-2 border-b-2 border-[#878787] p-8 text-[31.25px] md:text-[61.04px] font-semibold text-center">
            Services <span className="text-[#D6A74C]">//</span>
          </h1>
          {/* mobile design */}
          <div className="md:hidden">
            <div className="flex flex-col">
              <div className="flex flex-col px-8 pt-8 pb-8 gap-4">
                <h1 className="text-[20px] font-semibold text-center">
                  Custom Web Designs
                </h1>
                <p className="text-[12px]">
                  Tailored websites built to reflect your brand and tell your
                  story with clarity and impact.
                </p>
              </div>
              <div className="w-3/4 mx-auto">
                <Image
                  src="/ops.svg"
                  alt="Custom Web Design Image"
                  width={600}
                  height={200}
                  priority
                />
              </div>
              <hr className="w-full border-t-2 border-[#878787] mt-4" />
              <div className="flex flex-col px-8 pt-8 pb-8 gap-4">
                <h1 className="text-[20px] font-semibold text-center">
                  Frontend Developer
                </h1>
                <p className="text-[12px]">
                  Responsive interfaces that work seamlessly across all devices.
                </p>
              </div>
              <div className="w-3/4 mx-auto">
                <Image
                  src="/Responsive.svg"
                  alt="Custom Web Design Image"
                  width={600}
                  height={200}
                  priority
                />
              </div>
              <hr className="w-full border-t-2 border-[#878787] mt-4" />
              <div className="flex flex-col px-8 pt-8 pb-8 gap-4">
                <h1 className="text-[20px] font-semibold text-center">
                  Full-Stack Web Development
                </h1>
                <p className="text-[12px]">
                  Custom full-stack sites built with a modern content system
                  that lets you manage your own blog posts, product listings,
                  and store updates—with no hassle and no technical complexity.
                </p>
              </div>
              <div className="w-3/4 mx-auto">
                <Image
                  src="/Fullstack.svg"
                  alt="Custom Web Design Image"
                  width={600}
                  height={200}
                  priority
                />
              </div>
              <hr className="w-full border-[#878787] mt-4" />
            </div>
          </div>
          {/* medium+ design */}
          <div className="hidden md:block">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-4 w-1/2 px-8 lg:px-16">
                <h1 className="text-[20px] font-semibold">
                  Custom Web Designs
                </h1>
                <p>
                  Tailored websites built to reflect your brand and tell your
                  story with clarity and impact.
                </p>
              </div>
              <div className="border-l border-[#878787] w-1/2 flex justify-center items-center py-8">
                <Image
                  src="/ops.svg"
                  alt="Custom Web Design Image"
                  width={600}
                  height={200}
                  priority
                />
              </div>
            </div>
            <hr className="w-full border border-[#878787]"></hr>
            <div className="flex justify-between items-stretch">
              <div className="w-1/2 flex justify-center items-center py-8">
                <Image
                  src="/Responsive.svg"
                  alt="Custom Web Design Image"
                  width={600}
                  height={200}
                  priority
                />
              </div>
              <div className="flex flex-col justify-center gap-4 w-1/2 px-8 text-right border-l border-[#878787] lg:px-16">
                <h1 className="text-[20px] font-semibold">
                  Frontend Developer
                </h1>
                <p>
                  Responsive interfaces that work seamlessly across all devices.
                </p>
              </div>
            </div>
            <hr className="w-full border border-[#878787]"></hr>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-4 w-1/2 px-8 lg:px-16">
                <h1 className="text-[20px] font-semibold">
                  Full-Stack Web Development
                </h1>
                <p>
                  Custom full-stack sites built with a modern content system
                  that lets you manage your own blog posts, product listings,
                  and store updates—with no hassle and no technical complexity.
                </p>
              </div>
              <div className="border-l border-[#878787] w-1/2 flex justify-center items-center py-8">
                <Image
                  src="/Fullstack.svg"
                  alt="Custom Web Design Image"
                  width={600}
                  height={200}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        {/* Projects */}
        <section
          id="projects"
          className="col-span-4 md:col-span-8 lg:col-span-12 border-l-2 border-r-2 mx-8 border-[#878787] min-h-screen max-w-screen lg:mx-32 xl:mx-64"
        >
          <h1 className="border-t-2 border-b-2 border-[#878787] p-8 text-[31.25px] md:text-[61.04px] font-semibold text-center">
            Projects <span className="text-[#D6A74C]">//</span>
          </h1>
          <div className="bg-[repeating-linear-gradient(45deg,#878787,#878787_5px,#FFF7E8_5px,#FFF7E8_10px)] h-8" />
          <div className="flex flex-col gap-4">
            <ProjectAccordion />
          </div>
        </section>
        {/* Contact */}
        <section
          id="contact"
          className="col-span-4 md:col-span-8 lg:col-span-12 border-l-2 border-r-2 mx-8 border-[#878787] min-h-screen md:min-h-0 max-w-screen lg:mx-32 xl:mx-64"
        >
          <h1 className="border-t-2 border-b-2 border-[#878787] p-8 text-[31.25px] md:text-[61.04px] font-semibold text-center">
            Contact <span className="text-[#D6A74C]">//</span>
          </h1>
          <div className="bg-[repeating-linear-gradient(45deg,#878787,#878787_5px,#FFF7E8_5px,#FFF7E8_10px)] h-8 md:border-[#878787] md:border-b-2" />
          <div className="flex flex-col md:flex-row">
            <form
              action="https://formspree.io/f/xkgygdww"
              method="POST"
              className="flex flex-col items-center md:w-1/2  md:border-r-2 md:border-b-2 md:pb-6 md:border-[#878787]"
            >
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="border-b-2 border-t-2 border-[#878787] w-full p-2 md:border-t-0"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border-b-2 border-[#878787] w-full p-2"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                className="border-b-2 border-[#878787] w-full p-2"
              />
              <button
                type="submit"
                className="bg-[#A28743] p-2 rounded-lg shadow-[0_6px_0_0_rgba(43,43,43,1)] font-semibold cursor-pointer w-1/3 mt-4 lg:w-1/4 hover:shadow-[0_9px_0_0_rgba(43,43,43,1)] hover:bg-[#d6b55a]"
              >
                Send
              </button>
            </form>
            <div className="flex flex-col px-2 py-8 gap-4 md:border-b-2 md:border-[#878787] md:w-1/2 lg:px-16">
              <h1 className="text-[20px] font-semibold">Contact</h1>
              <p>pedroa.moreno10@gmail.com</p>
              <h1 className="text-[20px] font-semibold">Based In</h1>
              <p>San Antonio, Texas</p>
            </div>
          </div>
        </section>
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
