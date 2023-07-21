"use client";
import { useContext, useState } from "react";
import { PokemonContext } from "@/context/contextPokemon";
import Image from "next/image";
import IsLoading from "../loading";
import { SeeAll } from "../seeAll";
import { Search } from "../search";
import { Favorite } from "../favorite";
import * as S from "./style";
import logo from "public/logo.png";
import { Item } from "./components/itemList/item";

export function Header() {
  const { state } = useContext(PokemonContext);
  const [page, setPage] = useState("Ver todos");
  const pages = ["Favoritos", "Procurar", "Ver todos"];
  const numberFavorites = state.favorite.length;
  return (
    <div>
      {state.isLoading ? (
        <IsLoading />
      ) : (
        <>
          <S.Header>
            <S.HeaderContainer>
              <Image src={logo} width={75} height={30} alt={"Pokémon"} />
              <nav>
                <ul>
                  {pages.map((p, index) => (
                    <Item
                      state={p === "Favoritos" && numberFavorites}
                      key={index}
                      isClicked={p === page ? "active" : "disable"}
                      onClick={() => setPage(p)}
                    >
                      {p}
                    </Item>
                  ))}
                </ul>
              </nav>
              <button>Sair</button>
            </S.HeaderContainer>
          </S.Header>
          <S.Main>
            {page === "Ver todos" && <SeeAll />}
            {page === "Procurar" && <Search />}
            {page === "Favoritos" && <Favorite />}
          </S.Main>
        </>
      )}
    </div>
  );
}
