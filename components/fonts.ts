import { Noto_Sans } from "@next/font/google";

export const notoSans = Noto_Sans({
  weight: ["400", "700"],
  variable: "--font-noto",
  subsets: ["cyrillic", "latin"],
});
