import StyledProvider from "@/Global/styledProvider";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <StyledProvider>{children}</StyledProvider>
      </body>
    </html>
  );
}
