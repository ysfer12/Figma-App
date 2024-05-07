import Image from "next/image";
import Navbar from "./_components/Navbar";
import Table from "./_components/Table";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <div className="z-10 w-full  items-center justify-between font-mono text-sm lg:flex">
          <Table />
        </div>

      </main>
    </div>
  );
}