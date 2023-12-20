import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex items-center fixed top-0 w-full h-14 px-4 bg-white border-b shadow-sm">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="border-r">
            <Logo />
          </div>
          <div className="flex gap-x-6">
            <Link className="hover:text-rose-500 transition" href="/sign-in">
              Features
            </Link>
            <Link className="hover:text-rose-500 transition" href="/sign-in">
              Solutions
            </Link>
            <Link className="hover:text-rose-500 transition" href="/sign-in">
              Pricing
            </Link>
            <Link className="hover:text-rose-500 transition" href="/sign-in">
              Guide
            </Link>
          </div>
        </div>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Try for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
