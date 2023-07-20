"use client";
import Image from "next/image";
import * as S from "./style";

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <>
      <S.Header>
        <S.HeaderContainer>
          <Image src={""} width={50} height={50} alt={""} />
          <nav>
            <ul>
              <li>Favoritos</li>
              <li>Procurar</li>
              <li>Ver Todos</li>
            </ul>
          </nav>
          <button>Sair</button>
        </S.HeaderContainer>
      </S.Header>
      <S.Main>{children}</S.Main>
    </>
  );
}
