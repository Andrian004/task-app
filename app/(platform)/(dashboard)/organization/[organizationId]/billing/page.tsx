import { checkSubscribtion } from "@/lib/subscribtion";
import { Info } from "../_components/info";
import { Separator } from "@/components/ui/separator";
import { SubscribtionButton } from "./_components/subscribtion-button";

const BillingPage = async () => {
  const isProVersion = await checkSubscribtion();

  return (
    <div className="w-full">
      <Info isPro={isProVersion} />
      <Separator className="my-2" />
      <SubscribtionButton isPro={isProVersion} />
    </div>
  );
};

export default BillingPage;
