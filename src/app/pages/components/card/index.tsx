"use client";
import Image from "next/image";
import { useCard } from "@/hooks/useCard";
import { ResponseObject } from "@/@types";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import * as Dialog from "@radix-ui/react-dialog";
import * as Progress from "@radix-ui/react-progress";

import {
  ContainerCard,
  Heart,
  ImagemContainer,
  NamePokemon,
  TypePokemon,
  TypeContainer,
  Button,
  Content,
  Indicator,
  ProgressProgress,
} from "./style";

export default function Card({ pokemon }: { pokemon: ResponseObject }) {
  const { formattedName, img } = useCard(pokemon);
  return (
    <ContainerCard>
      <Heart>
        <AiOutlineHeart color="gray" size={28} />
      </Heart>
      <ImagemContainer>
        <Image src={img ? img : ""} width={76} height={80} alt="" />
      </ImagemContainer>
      <NamePokemon>{formattedName}</NamePokemon>
      <span>{pokemon && `ID: ${pokemon.id}`}</span>
      <TypeContainer>
        {pokemon.types?.map((item) => (
          <TypePokemon type={item.type.name} key={item.type.name}>
            {item.type.name}
          </TypePokemon>
        ))}
      </TypeContainer>

      <Dialog.Root>
        <Dialog.Trigger asChild={true}>
          <Button>Ver detalhes</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Content>
            <div>
              <p>Detalhes</p>
            </div>
            <div>
              <NamePokemon>{formattedName}</NamePokemon>
              <div>
                <Image src={img ? img : ""} width={76} height={80} alt="" />
              </div>
              <div>
                <p>{`${pokemon.height}m`}</p>
                <span>{`${pokemon.weight}Kg`}</span>
              </div>
              <TypeContainer>
                {pokemon.types?.map((item) => (
                  <TypePokemon type={item.type.name} key={item.type.name}>
                    {item.type.name}
                  </TypePokemon>
                ))}
              </TypeContainer>

              <ul>
                <p>Estátisticas</p>
                {pokemon.stats.map((item) => {
                  return (
                    <li key={item.stat.name}>
                      <p>{item.stat.name}</p>
                      <ProgressProgress value={item.base_stat} max={110}>
                        <Indicator
                          style={{
                            transform: `translateX(-${100 - item.base_stat}%)`,
                          }}
                        />
                      </ProgressProgress>

                      <span>{item.base_stat}</span>
                    </li>
                  );
                })}
              </ul>
              <button>
                <BsBookmark /> <p>Adicionar aos favoritos</p>
              </button>
            </div>
            <Dialog.Close />
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    </ContainerCard>
  );
}
