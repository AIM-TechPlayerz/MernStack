import Image from "next/image";
import { Inter } from "@next/font/google";

import { XMarkIcon } from "@heroicons/react/20/solid";
import record from "@/app/add-record/page";
import Link from "next/link";
import Herosection from "@/components/Herosection/herosection";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Herosection />
      <Footer />
    </main>
  );
}
