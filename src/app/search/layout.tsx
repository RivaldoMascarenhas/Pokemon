import { Header } from "../components/header";

export const metadata = {
  title: "Pokemons | Search",
};
interface LayoutSearchProps {
  children: React.ReactNode;
}
export default function LayoutSearch({ children }: LayoutSearchProps) {
  return <Header>{children}</Header>;
}
