import Heading from "@/components/header/Heading";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Heading />
      <div className="flex flex-col items-center gap- pt-5">
        <div className="border-2 rounded-lg p-3  m-1 text-center font-bold w-50">
          Welcome!
        </div>
        <div className="pt-5">
          So far this is all I've been able to come up with!
        </div>

        <img
          className="rounded-full w-96 h-96 border-8 hover:border-[#E3F1F8]"
          src="/cat_roomba.jpg"
          alt="Cat Roomba"
        ></img>

        <h2 className="w-132 text-2xl font-bold">
          Hi! I'm Kaelan Jantzen, a 3rd computer scientist studying at UVIC.
          This website has refences to all my personal projects I've developed
          over time.
        </h2>
      </div>
    </div>
  );
}
