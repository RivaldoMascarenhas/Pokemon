"use client";
import { useContext, useState } from "react";
import { PokemonContext } from "@/context/contextPokemon";
import Image from "next/image";
import { SeeAll } from "../seeAll";
import { Search } from "../search";
import { Favorite } from "../favorite";
import * as S from "./style";
import logo from "public/logo.png";
import { Item } from "./components/itemList/item";

export function Header() {
  const { state } = useContext(PokemonContext);
  const [page, setPage] = useState("Ver todos");
  const numberFavorites = state.favorite.length;
  return (
    <div>
      <S.Header>
        <S.HeaderContainer>
          <S.Logo href="/">
            <Image src={logo} width={75} height={30} alt={"Pokémon"} />
          </S.Logo>

          <ul>
            <Item
              numberFavorite={numberFavorites}
              isClicked={page === "Favoritos" ? "active" : "disable"}
              onClick={() => setPage("Favoritos")}
              text={"Favoritos"}
            />
            <Item
              text={"Procurar"}
              isClicked={page === "Procurar" ? "active" : "disable"}
              onClick={() => setPage("Procurar")}
            />
            <Item
              text={"Ver todos"}
              isClicked={page === "Ver todos" ? "active" : "disable"}
              onClick={() => setPage("Ver todos")}
            />
          </ul>

          <button>Sair</button>
        </S.HeaderContainer>
      </S.Header>
      <S.Main>
        {page === "Ver todos" && <SeeAll />}
        {page === "Procurar" && <Search />}
        {page === "Favoritos" && <Favorite />}
      </S.Main>
    </div>
  );
}
