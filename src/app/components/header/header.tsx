import Image from "next/image";

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Image src={""} width={50} height={50} alt={""} />
        <nav>
          <ul>
            <li>Favoritos</li>
            <li>Procurar</li>
            <li>Ver Todos</li>
          </ul>
        </nav>
        <button>Sair</button>
      </header>
      <main>{children}</main>
    </>
  );
}
