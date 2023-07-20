"use client";
import Image from "next/image";
import logo from "public/logo.png";
import * as S from "./style";

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <>
      <S.Header>
        <S.HeaderContainer>
          <Image src={logo} width={75} height={30} alt={"Pokémon"} />
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
