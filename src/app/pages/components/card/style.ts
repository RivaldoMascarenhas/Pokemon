import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 10.31rem;
  height: 14.75rem;
  background-color: ${(props) => props.theme.backgroundCard};
  position: relative;
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme.colors.gray300};
  }
`;
export const Loading = styled.div`
  width: 10.31rem;
  height: 14.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Heart = styled.div`
  position: absolute;
  top: 11px;
  right: 9px;
`;
export const ImagemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NamePokemon = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
`;

export const TypeContainer = styled.ul`
  display: flex;
  gap: 0.5rem;
`;
const typesPokemons = {
  fire: {
    background: "#FF3326",
    color: "black",
  },
  water: {
    background: "blue",
    color: "white",
  },
  grass: {
    background: "green",
    color: "white",
  },
  flying: {
    background: "lightblue",
    color: "black",
  },
  fighting: {
    background: "orange",
    color: "black",
  },
  poison: {
    background: "purple",
    color: "white",
  },
  electric: {
    background: "#FFCB05",
    color: "black",
  },
  ground: {
    background: "brown",
    color: "black",
  },
  rock: {
    background: "gray",
    color: "white",
  },
  psychic: {
    background: "pink",
    color: "black",
  },
  ice: {
    background: "lightblue",
    color: "black",
  },
  bug: {
    background: "green",
    color: "white",
  },
  ghost: {
    background: "purple",
    color: "black",
  },
  steel: {
    background: "gray",
    color: "black",
  },
  dragon: {
    background: "darkblue",
    color: "black",
  },
  dark: {
    background: "black",
    color: "white",
  },
  fairy: {
    background: "pink",
    color: "black",
  },
  normal: {
    background: "#FFCB05",
    color: "black",
  },
};

export const TypePokemon = styled.li<{ type: string }>`
  list-style: none;
  font-size: 8px;
  font-weight: 700;
  padding: 0.3rem 1rem;
  color: ${(p) => typesPokemons[p.type as keyof typeof typesPokemons].color};
  background-color: ${(p) =>
    typesPokemons[p.type as keyof typeof typesPokemons].background};
  border-radius: 8px;
  text-align: center;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  color: ${(p) => p.theme.colorText};
  background-color: ${(p) => p.theme.backgroundYellow};
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: #bea514;
  }
`;
