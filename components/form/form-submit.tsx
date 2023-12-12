"use-client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/loading/spinner";
import { cn } from "@/lib/utils";

interface FormSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

export const FormSubmit = ({
  children,
  disabled,
  className,
  variant,
}: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={variant}
      disabled={pending || disabled}
      type="submit"
      size="sm"
      className={cn(className)}
    >
      {pending && <Spinner className="w-4 h-4 text-white" />}
      {children}
    </Button>
  );
};
