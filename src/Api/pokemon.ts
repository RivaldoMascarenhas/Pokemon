import axios from "axios";

export const pokemonData = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
