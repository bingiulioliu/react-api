import styles from "./CastFetching.module.css";
import { useState, useEffect } from 'react';
import getAct from "./GenericFetch.js";

const API_URL_ACTORS = 'https://lanciweb.github.io/demo/api/actors/';
const API_URL_ACTRESSES = 'https://lanciweb.github.io/demo/api/actresses/';


function CastFetching() {

    const [actors, setActors] = useState([]);
    const [actresses, setActresses] = useState([]);
    const [filteredCast, setFilteredCast] = useState(fullCast);


    useEffect(() => {
        // Estrapolo gli attori
        getAct(API_URL_ACTORS, 'male')
            .then(data => setActors(data));
        // Estrapolo le attrici
        getAct(API_URL_ACTRESSES, 'female')
            .then(data => setActresses(data));
    }, []);

    // Merge degli attori
    const fullCast = [...actors, ...actresses];
    console.log(fullCast);

    // Filtraggio
    useEffect(() => {
        console.log('setup function');
        // Funzione che parte ad ogni modifica delle dipendenze
        const castFiltered = fullCast.filter(actor => {
            // Filtro per Genere (se vuoto mostra tutto, altrimenti confronta)
            const matchesGenre = selectedGenre === "" || actor.genre === selectedGenre;

            return matchesGenre;
        });
        // Aggiorna la lista visualizzata
        setFilteredCast(castFiltered);

        // Dipendenze: l'effect parte ogni volta che una di queste cambia
    }, [selectedGenre, fullCast]);


    return <>
        <div className="container d-flex justify-content-center align-items-center">
            <h1 className={`${styles.title} text-primary`}>Cast Fetching</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center">
            <h2>Filtra attori</h2>
            <select
            
            >
                <option value=''>Seleziona il genere</option>
                {fullCast.map((genre) => (
                    <option key={genre} value={genre}>{genre}
                    </option>
                ))}
            </select>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row row-cols-3 g-4">
                {fullCast.map(fullCast =>
                    <div key={fullCast.id} className="card col bg-secondary text-light">
                        <img src={fullCast.image} className="card-img-top object-fit-cover" alt={fullCast.name} />
                        <div className="card-body">
                            <h5 className="card-title">{fullCast.name}</h5>
                            <p className="card-text">Anno di nascita: {fullCast.birth_year}</p>
                            <p className="card-text">Nazionalità: {fullCast.nationality}</p>
                            <p className="card-text">Film più famosi: {fullCast.known_for}</p>
                            <p className="card-text">Riconoscimenti: {fullCast.awards}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>;
}
export default CastFetching;
