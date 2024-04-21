import { useQuery } from "react-query";
import Element from "./Element.js";
import { usePokemonState } from "../atom.js";
import { useTypeState } from "../atom.js";
import { useEffect, useState } from "react";
function Pokemons() {

    //state
    const [pokemonsSelected, setPokemonsSelected] = usePokemonState();
    const [type, setType] = useTypeState();
    const [pokemonList, setPokemonList] = useState(null);


    //Queries
    const fetchPokemons = async () => {
        const response = await fetch(type.url)
        return response.json()
    }



    const { data, status } = useQuery(type.name, fetchPokemons, {refetchOnWindowFocus: false})


    //useEffect 
    useEffect(() => {
        data?
         type.name!=="all" ?setPokemonList(data.pokemon) :setPokemonList (data.results) 
         : console.log("empty ")
        }, [type.name, data]);

    console.log(type)

    //returns 
    if (status === "loading") {
        return <div> loading </div>
    }
    if (status === "error") {
        return <div> Error </div>
    }

    if (pokemonList)
    return (
            type.name ==="all"?
            <div className="section row">
                <h3 className="display-3"> Pick your pokemons </h3>
                {pokemonList.map((pokemonEl, id) => (
                    <div
                        key={id} className="element col-lg-3 col-md-4 col-sm-6"
                        onClick={() => setPokemonsSelected([...pokemonsSelected, pokemonEl])}
                    >
                        <Element element={pokemonEl} />   
                    </div>
                )
                )}
            </div>
            :
            <div className="section row">
            <h3 className="display-3"> Pick your pokemons </h3>
            {pokemonList.map((pokemonEl, id) => (
                <div
                    key={id} className="element col-lg-3 col-md-4 col-sm-6"
                    onClick={() => setPokemonsSelected([...pokemonsSelected, pokemonEl?.pokemon])}
                >
                    <Element element={pokemonEl?.pokemon} />   
                </div>
            )
            )}
        </div>
    )
    else return null
}

export default Pokemons; 