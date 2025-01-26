import '../app/globals.css';

import { MAIN_FONT, MAIN_FONT_MONO } from "@/app/styles/Fonts";
export { METADATA as metadata } from "@/app/styles/Metadata";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MAIN_FONT.variable} ${MAIN_FONT_MONO.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
