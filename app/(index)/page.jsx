import Image from "next/image";
import Hero from "./components/Hero";
import Featured from "./components/Featured";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Featured />
    </main>
  );
}
