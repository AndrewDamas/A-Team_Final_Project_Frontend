import { Link, useNavigate } from "react-router-dom";
import "../styles/HomePage.css"
import pokemonLogo from "../images/pokemon-logo.png";
import pokemonVersionLogo from "../images/pokemon-version-logo.png";

export default function HomePage(){
    const navigate = useNavigate();
    return (
        <div className="HomePage" onClick={() => {navigate("/log-in")}}>
            <img className="pokemon-logo" src={pokemonLogo} alt="Pokemon" />
            <img className="pokemon-version-logo" src={pokemonVersionLogo} alt="Pokemon Javascript Version" />
            <button className="click-anywhere-to-start">Click anywhere to start</button>
        </div>
    )
}