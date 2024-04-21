import {atom, useRecoilState} from "recoil"
 const pokemonState = atom({
    key: "pokemons",
    default: [],
  })

export const usePokemonState = () => useRecoilState(pokemonState)

const typeState = atom({
  key: "type",
  default:{name: "all", url: "https://pokeapi.co/api/v2/pokemon"},
})

export const useTypeState = () => useRecoilState(typeState)

