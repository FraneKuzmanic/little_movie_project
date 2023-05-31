import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <Container>
      <About>
        <NavLink to={'/about/'}>
          About
        </NavLink>
      </About>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 7vh;
  background-color: #73683b;
  color: white;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
`;

const About = styled.div`
  margin-left: 1rem;
  
  a{
    color: white;
  }
`;

export default Navbar;