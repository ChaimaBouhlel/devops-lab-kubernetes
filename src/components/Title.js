import pokemon from '../assets/pokemon.png';
import '../styles/Title.css'
function Title() {
    return (
        <div className="section-title row">
            <div  className="col-lg-6">
                <h1 className="display-1 heading-custom"> You can make your own Pokedex now. </h1>
            </div>
            <div className="col-lg-6">
                <img
                    className="title-image"
                    src={pokemon}
                    alt="iphone-mockup"
                />
            </div>
        </div>
    );
}
export default Title;