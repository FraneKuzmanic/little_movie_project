import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import star from '../star-7207.svg';

function Movie() {

    const [details, setDetails] = useState({});
    let params = useParams();   /*we're taking the parameter from the route that is the movieId, which we use to
                                  fetch the specific movie data*/

    const getMovie = async () => {
      const url = `https://imdb-top-100-movies1.p.rapidapi.com/?id=${params.name}`;
      const options = {
	    method: 'GET',
	      headers: {
		      'X-RapidAPI-Key': 'f9d7d9e301msh3aa9c180e94de2bp17faa6jsn2636591a4aa4',
		      'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
	      }
      };

      const response = await fetch(url, options);
	    const result = await response.json();
      setDetails(result);
      console.log(result);
    }

    useEffect(() => {
      getMovie();
    }, [params.name]);  /*each time parameter changes useEffect will run the function for fetching the right movie data*/

    return (
      <>
      <Navbar />
      <Title>
        <h2>{details.title} ({details.year})</h2>
      </Title>
      <Container>
        <Image>
          {details.image && details.image[1] && details.image[1][1] && (
            <img src={details.image[1][1]} alt="" /> /*Had a problem with fetching the image so I wrote this format for security*/
          )}
        </Image> 
        <Desc>
          <h4>Description</h4>
          <p>{details.description}</p>
          <h4>Director</h4>
          {details.director && details.director[0] && (
            <p>{details.director[0]}</p>
          )}
          <h4>Rating</h4>
          <Rating>
          <p>{details.rating}</p>
          <img src={star} alt='slika' />
          </Rating>
        </Desc>
      </Container>
      </>
    );
};

const Container = styled.div`
    display: flex;
    font-size: 1rem;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    margin-left: 10rem;
    margin-right: auto;
    color: white;

    @media screen and (max-width: 720px){
        margin: 0;
        padding: 1rem;
    }
`;

const Title = styled.div`
    color: white;
    margin-top: 5rem;
    margin-left: 10rem;
    margin-right: auto;

    @media screen and (max-width: 720px){
        margin:1rem 1rem;
    }
`;

const Image = styled.div`
    flex-shrink: 0;
    
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
`;

const Desc= styled.div`
    flex-grow: 1;

    p{
      margin-bottom: 3rem;
      width: 40vw;
    }

    @media screen and (max-width: 720px){
      p{
       width: 60vw;
       margin-bottom: 2rem;
      }
    }
`;

const Rating = styled.div`

    img{
      width: 20px;
      height: 20px;
      object-fit: cover;
    }

    display: flex;

    p{
      width: auto;
      margin-right: 5px;

    }
  

`;

export default Movie;