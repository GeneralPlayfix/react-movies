import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Form = () => {
    //mes données sont dans moviesData, le seul moyen de le modifier c'est avec setMoviesData (c'est un hook)
    const [moviesData, setMoviesData] = useState([])
    const [search, setSearch] = useState("harry potter");
    const [sortGoodBad, setSortGoodBad] = useState(null);
    // on ne joue cette fonction que lorsque le composant est appelé 
    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=c72f5c88cf38d3612ec6d8b97ca912fa&query=${search}&language=fr-FR`
        ).then((res) => setMoviesData(res.data.results))
        //j'ajoute dans moviesData res.data.results
    }, [search])
    //les [] à la fin permet de dire tu rejoues ça qu'en cas de changement de search

    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    {/* ou on change */}
                    <input type="text" placeholder="Entrer le titre d'un film" id="search-input" onInput={(e) => setSearch(e.target.value)} />
                    <input type="submit" placeholder='Rechercher' />
                </form>

                <div className="btn-sort-container">
                    <div className="btn-sort" id="goodToBad" onClick={() => setSortGoodBad("goodToBad")}>
                        Top <span>➡</span>
                    </div>
                    <div className="btn-sort" id="badToGood" onClick={() => setSortGoodBad("badToGood")}>
                        Flop <span>➡</span>
                    </div>
                </div>
            </div>
            <div className="result">
                {/* je ne garde que les 12 premiers éléments que je map */}
                {moviesData
                    .slice(0, 12)
                    .sort((a, b) => {
                        if (sortGoodBad === "goodToBad") {
                            return b.vote_average - a.vote_average
                        } else if (sortGoodBad === "badToGood") {
                            return a.vote_average - b.vote_average
                        }
                    })
                    .map((movie) => (
                        //key est obligatoire en react dans un map et ensuite je lui passe les données (dans une prop "movie")
                        <Card key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    );
};

export default Form;