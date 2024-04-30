import Image from "next/image";
import logo from "@/public/kenny.jpg"
import { SignUpButton,SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";


export default function Home() {
  


  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="mr-10 ml-auto space-x-10 mt-10">

      <Button><SignUpButton /></Button>
      <Button><SignInButton /></Button>
      </div>
      <div className="relative mt-10 mb-4">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="relative z-10 p-4 text-white text-center">
          <h2 className="text-2xl font-bold">Welcome to Summit</h2>
          <p className="text-lg">A place to learn, build, and grow your skills</p>
        </div>
      </div>
      <Image src={logo} className="w-full relative" alt="Pic" />
      <div className="absolute mt-[40%] text-white text-xl font-bold">
        <h1 className="w-[700px]">Welcome to our Platform and explore our various tools to help with your
        educational needs </h1>
        <h1 className="w-[700px] mt-5">Simply <span className="text-black">Sign Up</span> with us to use the tools</h1>
      </div>
      
    </main>
  );
}
