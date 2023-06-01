import React from 'react';
import styled from 'styled-components';
import slika from '../picture.png'

function About() {
  return (
    <AboutDiv>
        <ImgContainer><img src={slika} alt="" /></ImgContainer>
        <AboutContainer>
            <h2>About me</h2>
            <p>Hi, this is me! Pursuing my goal to create useful and creative applications.<br></br>
               I think that software is like a box of chocolate, you never know what you gonna get.<br></br>
               I hope that this movie reference is familiar to you.Just like that this little project came into<br></br>
               creation, hours of fighting with API keys and here we are.
            </p>
            <h2>About project</h2>
            <p>In this project I used an IMDB API for fetching the top 100 highest rated movies by IMDB audience.<br></br>
               I am a huge movie fan who wants to develop his own movie platform, and this little project is a<br></br> 
               first step. I'm looking forward to keep sharpening my skills and learn more things that will help me<br></br>
               develop that project and many more.
            </p>
        </AboutContainer>
    </AboutDiv>
  );
};

const ImgContainer = styled.div`
    width: 30%;
    height: 30%;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 200px;
    }
`;

const AboutContainer = styled.div`
    height: 30%;

    p{
        margin-bottom: 3rem;
    }

    h2{
        margin-top: 1rem;
        font-weight: 900;
        margin-bottom: 0.5rem;
    }
`;

const AboutDiv = styled.div`
    width:80%;
    display: flex;
    flex-direction: column;
    color: white;
    margin: 5rem auto;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(0,0,0,0.4);  
`;

export default About