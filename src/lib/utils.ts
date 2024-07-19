import { type ClassValue, clsx } from "clsx";
import {
  Bike,
  Blocks,
  Footprints,
  Gamepad2,
  Shirt,
  Smartphone,
  Theater,
  Tv,
} from "lucide-react";
import path from "path";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const categories = [
  { name: "Electronics", path: "/", icon: Tv },
  { name: "Entertainment", path: "/", icon: Theater },
  { name: "Sports", path: "/", icon: Bike },
  { name: "Shoes", path: "/", icon: Footprints },
  { name: "Gamess", path: "/", icon: Gamepad2 },
  { name: "Men's Fashion", path: "/", icon: Shirt },
  { name: "Women's Fashion", path: "/", icon: Tv },
  { name: "Phones", path: "/", icon: Smartphone },
  { name: "Toys", path: "/", icon: Blocks },
] as const;
