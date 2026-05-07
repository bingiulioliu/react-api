import styles from "./CastFetching.module.css";
import { useState, useEffect } from 'react';
import getAct from "./GenericFetch.js";

const API_URL_ACTORS = 'https://lanciweb.github.io/demo/api/actors/';
const API_URL_ACTRESSES = 'https://lanciweb.github.io/demo/api/actresses/';


function CastFetching() {

    const [actors, setActors] = useState([]);
    const [actresses, setActresses] = useState([]);
    const [filteredCast, setFilteredCast] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');


    useEffect(() => {
        // Estrapolo gli attori
        getAct(API_URL_ACTORS, 'male')
            .then(data => setActors(data));
        // Estrapolo le attrici
        getAct(API_URL_ACTRESSES, 'female')
            .then(data => setActresses(data));
    }, []);

    const fullCast = [...actors, ...actresses];
    console.log(fullCast);
    
    // Filtraggio
    useEffect(() => {
        // Merge degli attori
        console.log('setup function');
        // Funzione che parte ad ogni modifica delle dipendenze
        const castFiltered = fullCast.filter(actor => {
            // Filtro per Genere (se vuoto mostra tutto, altrimenti confronta)
            return selectedGenre === "" || actor.genre === selectedGenre;
        });
        // Aggiorna la lista visualizzata
        setFilteredCast(castFiltered);

        // Dipendenze: l'effect parte ogni volta che una di queste cambia
    }, [selectedGenre, actors, actresses]);

    const changeInputHandler = (event) => {
        setSelectedGenre(event.target.value);
    };


    return <>
        <div className="container d-flex justify-content-center align-items-center">
            <h1 className={`${styles.title} text-primary`}>Cast Fetching</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center">
            <h2>Filtra attori</h2>
            <select value={selectedGenre} className="form-select" onChange={changeInputHandler}>
                <option value="">Tutti i generi</option>
                <option value="male">Attori</option>
                <option value="female">Attrici</option>
            </select>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row row-cols-3 g-4">
                {filteredCast.map(actor =>
                    <div key={actor.id} className="card col bg-secondary text-light">
                        <img src={actor.image} className="card-img-top object-fit-cover" alt={actor.name} />
                        <div className="card-body">
                            <h5 className="card-title">{actor.name}</h5>
                            <p className="card-text">Anno di nascita: {actor.birth_year}</p>
                            <p className="card-text">Nazionalità: {actor.nationality}</p>
                            <p className="card-text">Film famosi: {String(actor.known_for)}</p>
                            <p className="card-text">Riconoscimenti: {String(actor.awards)}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>;
}
export default CastFetching;
