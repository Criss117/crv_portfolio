import { twMerge } from "tailwind-merge";
import clsx, { type ClassValue } from "clsx";

function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export default cn;