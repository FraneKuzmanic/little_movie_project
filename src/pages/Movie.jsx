import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

function Movie() {

    const [details, setDetails] = useState({});
    let params = useParams();

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
    }, [params.name]);

    return (
      <>
      <Navbar />
      <Title>
        <h2>{details.title} ({details.year})</h2>
      </Title>
      <Container>
        <Image>
          {details.image && details.image[1] && details.image[1][1] && (
            <img src={details.image[1][1]} alt="" />
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
          <p>{details.rating}</p>
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
`;

const Title = styled.div`
    color: white;
    margin-top: 5rem;
    margin-left: 10rem;
    margin-right: auto;
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
`;

export default Movie;