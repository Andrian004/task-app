import Link from "next/link";
import { Medal } from "lucide-react";
import { cn } from "@/lib/utils";
import { poppinsFont, aoboshiOneFont } from "@/lib/fonts";
import { Button } from "@/components/ui/button";

const MarketingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={cn(
          "flex flex-col justify-center items-center",
          aoboshiOneFont.className
        )}
      >
        <div className="flex items-center shadow-sm p-4 mb-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          Modern Task Management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Nugas helps team management
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work faster.
        </div>
        <p
          className={cn(
            "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
            poppinsFont.className
          )}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          earum fugiat, aperiam eius ab nostrum odio iusto exercitationem
          asperiores sunt.
        </p>
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href={"sign-up"}>Get Nugas for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
