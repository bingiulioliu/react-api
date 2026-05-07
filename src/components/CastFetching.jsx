import styles from "./CastFetching.module.css";
import { useState, useEffect } from 'react';
import getAct from "./GenericFetch.js";

const API_URL_ACTORS = 'https://lanciweb.github.io/demo/api/actors/';
const API_URL_ACTRESSES = 'https://lanciweb.github.io/demo/api/actresses/';


function CastFetching() {

    const [actors, setActors] = useState([]);
    const [actresses, setActresses] = useState([]);

    useEffect(()=>{
        // Estrapolo gli attori
        getAct(API_URL_ACTORS, 'male')
        .then(data => setActors(data));
        // Estrapolo le attrici
        getAct(API_URL_ACTRESSES, 'female')
        .then(data => setActresses(data));
    },[]);
    
    
    const fullCast = [...actors, ...actresses];
    console.log(fullCast);
    

    return <>
        <div className="container d-flex justify-content-center align-items-center">
            <h1 className={`${styles.title} text-primary`}>Cast Fetching</h1>
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
