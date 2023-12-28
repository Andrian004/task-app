import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { Info } from "../_components/info";
import { ActivityList } from "./_components/activity-list";
import { checkSubscribtion } from "@/lib/subscribtion";

const ActivityPage = async () => {
  const isProVersion = await checkSubscribtion();

  return (
    <div className="w-full">
      <Info isPro={isProVersion} />
      <Separator className="my-2" />
      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  );
};

export default ActivityPage;
