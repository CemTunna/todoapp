import * as React from 'react';
import styled from 'styled-components';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import * as types from '../state/types/index';

const Container = styled.div`
  border: 1px solid #e3e7f1;
  border-radius: 10px;
  max-width: 100%;
  padding: 0.2rem 0.5rem;
  overflow: hidden;
  transition: all 0.2s ease-out;
  margin-top: 1rem;

  border: ${(props) => {
    if (props.notEmpty === true) {
      return '1px solid #2b4255';
    } else {
      return '1px solid #e3e7f1;';
    }
  }};
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Input = styled.input`
  height: 1rem;
  width: 98%;
  margin-right: 0.2rem;
  outline: none;
  border: none;
  ::placeholder {
    color: #2b4255;
  }
  color: #2b4255;
`;
const StyledIcon = styled(ControlPointIcon)`
  color: #2b4255;
  cursor: pointer;
`;
const TodoInput = () => {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState({
    todoName: '',
    completed: false,
  });

  const handleInput = (e) => {
    setInput((prevState) => ({ ...prevState, todoName: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.todoName.trim() !== '')
      dispatch({ type: types.ADD_TODO, payload: input });
    setInput((prevState) => ({ ...prevState, todoName: '' }));
  };

  return (
    <Container notEmpty={input.todoName.length > 0 ? true : false}>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='Enter Todo'
          required
          onChange={handleInput}
          value={input.todoName}
          maxLength={60}
        />
        <IconButton type='submit' disabled={!input.todoName}>
          <StyledIcon />
        </IconButton>
      </Form>
    </Container>
  );
};

export default TodoInput;
