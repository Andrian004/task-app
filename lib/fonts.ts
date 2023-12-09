import { Poppins, Aoboshi_One } from "next/font/google";

export const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const aoboshiOneFont = Aoboshi_One({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});
