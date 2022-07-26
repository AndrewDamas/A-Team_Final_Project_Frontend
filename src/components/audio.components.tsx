import "../audio/bulbasaurAudio.mp3";
import "../audio/charmanderAudio.mp3";
import "../audio/squirtleAudio.mp3";


export default function Audio(pokemonSound: string) {
    const bulbasaurAudio =  require("../audio/bulbasaurAudio.mp3");
    const charmanderAudio =  require("../audio/charmanderAudio.mp3");
    const squirtleAudio =  require("../audio/squirtleAudio.mp3");
    const start = (pokemonSound: string) => {
        if (pokemonSound === "bulbasaur") {
            bulbasaurAudio.play();
        }
        else if (pokemonSound === "charmander") {
            charmanderAudio.play();
        }
        else if (pokemonSound === "squirtle") {
            squirtleAudio.play();
        }
    }

    return(
        {start}
    )
}