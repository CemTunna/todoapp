import React from 'react';
import TodoList from '../components/TodoList';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const NavContainer = styled.div`
  align-self: flex-start;
  position: absolute;
  top: 0;
  padding: 1.5rem;
`;
const HomePage = () => {
  return (
    <Container>
      <NavContainer>
        <Navbar />
      </NavContainer>
      <TodoList />
    </Container>
  );
};

export default HomePage;
