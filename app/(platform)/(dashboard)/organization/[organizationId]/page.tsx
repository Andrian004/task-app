import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { Info } from "./_components/info";
import { BoardList } from "./_components/board-list";
import { checkSubscribtion } from "@/lib/subscribtion";

const OrganizationPage = async () => {
  const isProVersion = await checkSubscribtion();

  return (
    <div className="w-full mb-20">
      <Info isPro={isProVersion} />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationPage;
