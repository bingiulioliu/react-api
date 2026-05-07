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
        .then(data => setActresses(data))
    },[actors, actresses])


    return <>
        <div className="container d-flex justify-content-center align-items-center">
            <h1 className={`${styles.title} text-primary`}>Cast Fetching</h1>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="card col">
                    <img src="#" className="card-img-top" alt="Nome Attore" />
                    <div className="card-body">
                        <h5 className="card-title">Nome</h5>
                        <p className="card-text">Anno di nascita: </p>
                        <p className="card-text">Nazionalità: </p>
                        <p className="card-text">Film più famosi: </p>
                        <p className="card-text">Riconoscimenti: </p>
                    </div>
                </div>
            </div>
        </div>
        <div>{JSON.stringify(actors)}</div>
    </>;
}
export default CastFetching;
