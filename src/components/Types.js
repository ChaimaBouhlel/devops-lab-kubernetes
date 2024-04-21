import { useQuery } from "react-query";
import Element from "./Element";
import { useTypeState } from "../atom";
function Types() {

    const fetchTypes = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/type/")
        return response.json()
    }

    const { data, status } = useQuery("types", fetchTypes)


    const [type, setType] = useTypeState();

    if (status === "loading") {
        return <div> loading </div>
    }
    if (status === "error") {
        return <div> Error </div>
    }

    return (
        <div className="section row">
            <h3 className="display-3"> Pick your type </h3>

            {data.results.map((type, id) => (
                <div key={id}
                className="col-lg-3 col-md-4 col-sm-6 element"
                onClick={()=> setType(type)}
                >
                    <Element element={type} />

                </div>
            )
            )}

        </div>

    )
}

export default Types; 