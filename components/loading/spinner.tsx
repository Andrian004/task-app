"use client";

import { cn } from "@/lib/utils";

interface SpinnerProps {
  className?: string;
  color?: "dark" | "light";
}

export const Spinner = ({ className, color }: SpinnerProps) => {
  return (
    <svg
      className={cn("animate-spin mr-3", className)}
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      fill={color === "dark" ? "#484848" : "#ffffff"}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g fill="none" fillRule="evenodd">
          {" "}
          <circle
            cx="7"
            cy="7"
            r="6"
            stroke="#ffffff"
            strokeOpacity=".1"
            strokeWidth="2"
          ></circle>{" "}
          <path
            fill={color === "dark" ? "#484848" : "#ffffff"}
            fillOpacity=".1"
            fillRule="nonzero"
            d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};
