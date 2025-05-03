import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Heading from "@/components/header/Heading";
import Projects from "@/components/projects/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Heading />
      <section className="flex flex-col items-center pt-5">
        <div className="border-2 rounded-lg p-3  mt-24 text-center font-bold w-50">
          Welcome!
        </div>
        <div className="mt-14">
          <img
            className="rounded-full w-96 h-96 border-8 hover:border-[#E3F1F8]"
            src="/cat_roomba.jpg"
            alt="Cat Roomba"
          ></img>
        </div>

        <p className="w-150 text-2xl font-bold pt-20 text-center text-gray-900">
          Hi! I'm <span className="text-blue-500">Kaelan Jantzen</span>, a 3rd
          year computer scientist studying at UVIC. This website has references
          to my personal projects I've developed over time.
        </p>
      </section>
      <section className="">
        <About/>
        <span id="About"></span>
      </section>
      <section>
        <Projects/>
        <span id="Projects"></span>
      </section>
      <section>
        <Contact/>
        <span id="Contact"></span>
      </section>
    </div>
  );
}
