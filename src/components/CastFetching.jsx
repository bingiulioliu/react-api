import styles from "./CastFetching.module.css";
import { useState, useEffect } from 'react';

function CastFetching() {
    return <>
        <div className="container d-flex justify-content-center align-items-center">
            <h1 className={`${styles.title} text-primary`}>Cast Fetching</h1>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                <div class="card col">
                    <img src="#" class="card-img-top" alt="Nome Attore"/>
                    <div class="card-body">
                        <h5 class="card-title">Nome</h5>
                        <p class="card-text">Anno di nascita: </p>
                        <p class="card-text">Nazionalità: </p>
                        <p class="card-text">Film più famosi: </p>
                        <p class="card-text">Riconoscimenti: </p>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
export default CastFetching;
