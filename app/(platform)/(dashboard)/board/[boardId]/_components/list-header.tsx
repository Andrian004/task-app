"use client";

import { useState, useRef, ElementRef } from "react";
import { List } from "@prisma/client";
import { useEventListener } from "usehooks-ts";
import { FormInput } from "@/components/form/form-input";
import { useAction } from "@/hooks/use-action";
import { updateList } from "@/actions/update-list";
import { toast } from "sonner";
import { ListOptions } from "./list-options";

interface ListHeaderProps {
  data: List;
}

export const ListHeader = ({ data }: ListHeaderProps) => {
  const [title, setTitle] = useState<string>(data.title);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const enableEditing = () => {
    setIsEditing(true);

    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      formRef.current?.requestSubmit();
    }
  };

  const { execute } = useAction(updateList, {
    onSuccess: (data) => {
      toast.success(`Renamed to "${data.title}"`);
      setTitle(data.title);
      disableEditing();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const id = formData.get("id") as string;
    const boardId = formData.get("boardId") as string;

    if (title.length < 3) return toast.warning("Title is to short");
    if (title === data.title) return disableEditing();

    execute({
      title,
      id: id,
      boardId: boardId,
    });
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  useEventListener("keydown", onKeydown);

  return (
    <div className="flex justify-between items-start gap-x-2 text-sm font-semibold pt-2 px-2">
      {isEditing ? (
        <form ref={formRef} action={onSubmit} className="flex-1 px-[2px]">
          <input hidden id="id" name="id" defaultValue={data.id} />
          <input
            hidden
            id="boardId"
            name="boardId"
            defaultValue={data.boardId}
          />
          <FormInput
            ref={inputRef}
            id="title"
            onBlur={onBlur}
            placeholder="Enter list title"
            defaultValue={title}
            className="h-7 text-sm px-[7px] py-1 font-medium border-transparent hover:border-input focus:border-input transition truncate bg-transparent focus:bg-white"
          />
          <button type="submit" hidden />
        </form>
      ) : (
        <div
          onClick={enableEditing}
          className="w-full h-7 text-sm font-medium px-2.5 py-1 border-transparent"
        >
          {title}
        </div>
      )}
      <ListOptions onAddCard={() => {}} data={data} />
    </div>
  );
};
