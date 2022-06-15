import React from 'react';
import todoLogo from '../assets/todo.jpg';
import styled from 'styled-components';
const Container = styled.div`
  max-width: 1rem;
  /* border: 1px solid #e3e7f1;
  border-radius: 10px;
  max-width: 100%;
  padding: 0.2rem 0.5rem;
  overflow: hidden;
  transition: all 0.2s ease-out;
  margin-top: 1rem;

  border: ${(props) => {
    if (props.notEmpty === true) {
      console.log('notempty');
      return '1px solid #2b4255';
    } else {
      console.log('éempty');
      return '1px solid #e3e7f1;';
    }
  }};*/
`;
const Navbar = () => {
  return (
    <Container>
      <img src={todoLogo} width={200} height={150} />
    </Container>
  );
};

export default Navbar;
