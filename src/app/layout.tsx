import { getCssText } from "../styles";
import "./globals.css";
import { Roboto } from "next/font/google"

const roboto = Roboto({ weight: ["400", "700"] });

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <head>
        <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText() }} />
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
