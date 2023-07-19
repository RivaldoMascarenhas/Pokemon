import { Header } from "../components/header";

interface LayoutSearchProps {
  children: React.ReactNode;
}
export default function LayoutSearch({ children }: LayoutSearchProps) {
  return <Header>{children}</Header>;
}
