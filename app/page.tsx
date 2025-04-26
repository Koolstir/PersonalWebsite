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
        <div className="pt-5">So far this is all I've been able to come up with!</div>
      </div>
    </div>
  );
}
