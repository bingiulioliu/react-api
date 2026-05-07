import styles from "./CastFetching.module.css";
import { useState, useEffect } from 'react';

const API_URL_ACTORS = 'https://lanciweb.github.io/demo/api/actors/';
const API_URL_ACTRESSES = 'https://lanciweb.github.io/demo/api/actresses/';




function CastFetching() {

    const [actors, setActors] = useState([]);
    const [actresses, setActresses] = useState([]);

    // Fetch attori
    const actorsFetch = () => {
        return fetch(API_URL_ACTORS)
            .then(response => response.json())
            .then((jsonActors) => {

                return jsonActors.map(item => {

                    return {
                        genre: 'male',
                        name: item.name,
                        birth_year: item.birth_year,
                        nationality: item.nationality,
                        known_for: item.known_for,
                        awards: item.awards,
                        biography: item.biography,
                        image: item.image
                    };
                });
            })
            .catch(err => console.error("Errore nella fetch:", err));
    };

    useEffect(() => {
        actorsFetch().then(data => {
            setActors(data);
        });
    }, []);

    console.log(actors);


    //Fetch attrici
    const actressesFetch = () => {
        return fetch(API_URL_ACTRESSES)
            .then(response => response.json())
            .then((jsonActresses) => {

                return jsonActresses.map(item => {

                    return {
                        genre: 'female',
                        name: item.name,
                        birth_year: item.birth_year,
                        nationality: item.nationality,
                        known_for: item.known_for,
                        awards: item.awards,
                        biography: item.biography,
                        image: item.image
                    };
                });
            })
            .catch(err => console.error("Errore nella fetch:", err));
    };

    useEffect(() => {
        actressesFetch().then(data => {
            setActresses(data);
        });
    }, []);

    console.log(actresses);


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
