import Image from "next/image";
import { Header } from "./components/organisms/Header";
import { Illustration } from "./components/atoms/Illustration";
import { Hero } from "./components/organisms/Hero";
import { Articles } from "./components/organisms/Articles";

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between pr-0 mr-0 relative h-screen">
        <div className="basis-3/5 lg:px-20 lg:py-12 px- py-6 px-6 flex flex-col">
          <Header />
          <div className="flex items-center flex-grow">
            <Hero className="mt-10" />
          </div>
        </div>
        <div className="bg-black flex items-center grow">
          <Illustration className="w-full lg:object-contain h-screen object-cover" />
        </div>
      </div>
    </>
  );
}
