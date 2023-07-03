import axios from "axios";

export const pokemonAPI = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
useEffect(() => {
  async function GetPokemonAll(total: number) {
    try {
      const reponse = await pokemonAPI.get(`pokemon?limit=${total}&offset=0`);
      const data = reponse.data;
      setAllPokemon(data);
    } catch (error) {
      console.log(error);
    }
  }
  GetPokemonAll(25);
}, []);
