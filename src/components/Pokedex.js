import Element from "./Element";

function Pokedex({ pokedex }) {
    return (

        pokedex === [] ?
            <div className="section">
                <h3 className="display-3"> Your Pokedex </h3>
                <p>Your pokedex is empty now.</p>
            </div> :
            <div className="section row">
                <h3 className="display-3"> Your Pokedex </h3>
                {pokedex.map((pokemonSelected) =>
                (
                    <div className="col-lg-3 col-md-4 col-sm-6 element">

                        <Element element={pokemonSelected}></Element>
                    </div>))}
            </div>

    )
}

export default Pokedex;