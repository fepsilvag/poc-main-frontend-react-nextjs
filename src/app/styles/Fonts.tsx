import { Geist, Geist_Mono } from "next/font/google";

export const MAIN_FONT = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const MAIN_FONT_MONO = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});