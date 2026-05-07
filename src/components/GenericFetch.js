

const getAct = (url, gender) => {
    return fetch(url)
        .then(response => response.json())
        .then((jsonList) => {
            // Mappiamo i dati usando il parametro 'gender'
            return jsonList.map(item => ({
                genre: gender,
                name: item.name,
                birth_year: item.birth_year,
                nationality: item.nationality,
                known_for: item.known_for,
                awards: item.awards,
                biography: item.biography,
                id: crypto.randomUUID(),
                image: item.image
            }));
        })
        .catch(err => console.error(err));
};

export default getAct;



{/*
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

    */}