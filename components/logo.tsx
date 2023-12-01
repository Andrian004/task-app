"use client";
import Image from "next/image";
import LogoImg from "@/public/nugas-logo.png";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="hover:opacity-75 cursor-pointer transition items-center gap-x-2 hidden md:flex"
      onClick={() => router.push("/")}
    >
      <Image src={LogoImg} alt="logo" height={70} width={150} />
    </div>
  );
};
