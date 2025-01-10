import Image from "next/image";
import MailTo from "./components/mailto";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center -mt-5 m-10">
      <Image src='/clarissa_cat_transparent.png' width={512} height={512} alt="cat"/>
      <div className="flex flex-col">
        <div className="items-left justify-left">
          <h1 className="text-black mt-5 text-8xl font-bold">chi mcisaac</h1>
          <p className="text-black mt-5 text-2xl">1st year cs student at Carleton University</p>
          <p className="text-black mt-5 text-2xl">swe intern @ Chromatic Data</p>
          <p className="text-black mt-5 text-2xl">swe intern @ Hivenue</p>
          <div className="mt-5 flex items-center gap-4">
            <MailTo label="contact me" mailto="chixie.mcisaac@gmail.com" className="bg-black text-2xl text-white p-2 rounded-md w-fit"/>
            <Link href="https://github.com/qimcis" target="_blank" rel="noopener noreferrer">
              <Github size={32} strokeWidth={1.1} className="text-black hover:text-gray-500 transition-colors" />
            </Link>
            <Link href="https://linkedin.com/in/chimcisaac" target="_blank" rel="noopener noreferrer">
              <Linkedin size={32} strokeWidth={1.1} className="text-black hover:text-gray-500 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}