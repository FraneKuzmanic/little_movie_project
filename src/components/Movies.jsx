import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Movies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getData();
    },[]);
    
    const getData = async () => {  /*first time function will fetch the data, other times it will take it from the
                                    localStorage*/

        const fetched = localStorage.getItem('movies');

        if (fetched){
            setMovies(JSON.parse(fetched));  
        }
        else{
            const url = 'https://imdb-top-100-movies1.p.rapidapi.com/';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'f9d7d9e301msh3aa9c180e94de2bp17faa6jsn2636591a4aa4',
                    'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
                }
            };
    
            const api = await fetch(url, options);
            const result = await api.json();

            localStorage.setItem('movies', JSON.stringify(result));

            setMovies(result);
            console.log(result);
        }
    }

    return (
        <>
            <Container>
            {movies.map((movie) => {
                return(
                    <MovieCard key={movie.id}>
                        <img src={movie.image[0][1]} alt="slika" />
                        <Link to={"/movies/"+ movie.id}>
                        <p>{movie.rank}. {movie.title}</p>
                        </Link>
                    </MovieCard>
                );
            })}
            </Container>
        </>
    );
}

const Container = styled.div`
    display: grid;
    width: 60%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    grid-gap: 10px;
    text-align: center;
    margin: 2rem auto;

    @media screen and (max-width: 1100px){
        grid-auto-rows: 0.5fr;
        font-size: 0.8rem;
    }

    @media screen and (max-width: 500px){
        width: 100%;
        grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
    }
`;

const MovieCard = styled.div`
    background-color: #292929;
    border-radius: 0.5rem;
    
    a {
        text-decoration: none;
        color: #d2cfcf;
    }

    img {
         width: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
    }

    p{
        cursor: pointer;
    }
    p:hover{
        font-weight: 900;
    }
`;

export default Movies;