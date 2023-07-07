"use client";
import { ResponseObject, typeStaticProps } from "@/@types";
import {
  ContainerStatic,
  Indicator,
  ItemStatic,
  ProgressProgress,
} from "./styled";

export default function StaticPokemon({
  pokemon,
}: {
  pokemon: ResponseObject;
}) {
  const typeStatic: typeStaticProps = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "S.ATK",
    "special-defense": "S.DEF",
    speed: "SPD",
  };
  return (
    <ContainerStatic>
      <p>Estátisticas</p>
      {pokemon.stats.map((item) => {
        return (
          <ItemStatic key={item.stat.name}>
            <p>{typeStatic[item.stat.name as keyof typeStaticProps]}</p>
            <ProgressProgress value={item.base_stat} max={110}>
              <Indicator
                style={{
                  transform: `translateX(-${110 - item.base_stat}%)`,
                }}
              />
            </ProgressProgress>

            <span>{item.base_stat}</span>
          </ItemStatic>
        );
      })}
    </ContainerStatic>
  );
}
