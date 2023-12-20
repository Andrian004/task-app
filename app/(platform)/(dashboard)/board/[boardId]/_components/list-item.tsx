"use client";

import { ListWithCards } from "@/types";
import { ListHeader } from "./list-header";

interface ListItemProps {
  index: number;
  data: ListWithCards;
}

export const ListItem = ({ index, data }: ListItemProps) => {
  return (
    <li className="shrink-0 w-[272px] h-full select-none">
      <div className="w-full bg-[#f1f2f4] rounded-md shadow-md pb-2">
        <ListHeader data={data} />
      </div>
    </li>
  );
};