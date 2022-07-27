import { Link, useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import pokemonLogo from "../images/pokemon-logo.png";
import pokemonVersionLogo from "../images/pokemon-version-logo.png";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div
      className="HomePage"
      onClick={() => {
        navigate("/log-in");
      }}
    >
      <div className="pokemon-logo">
        <img src={pokemonLogo} alt="Pokemon" />
      </div>
      <div className="pokemon-version-logo">
        <img
          src={pokemonVersionLogo}
          alt="Pokemon Javascript Version"
        />
      </div>
      <div className="click-anywhere-to-start">
        <button>
          Click anywhere to start
        </button>
      </div>
    </div>
  );
}
