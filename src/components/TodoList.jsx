import * as React from 'react';
import TodoInput from './TodoInput';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Badge } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import * as types from '../state/types/index';

const Container = styled.div`
  border: 1px solid #e3e7f1;
  border-radius: 10px;
  width: 40rem;
  padding: 2rem;
  background: linear-gradient(#ffffff 85%, #e3e7f1 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  @media (max-width: 730px) {
    width: 20rem;
  }
  @media (max-width: 380px) {
    width: 15rem;
  }
`;
const TitleContainer = styled.div`
  padding: 0 0.4rem;

  align-self: center;
`;
const Title = styled.h1`
  color: #2b4255;
  font-weight: lighter;
  margin: 0 0.5rem;
`;
const List = styled.ul`
  padding: 1rem;
  list-style: none;
  padding: 0;
`;
const Item = styled.li`
  border: 1px solid #e3e7f1;
  border-radius: 10px;
  padding: 0.5rem 0.5rem;
  overflow: hidden;
  transition: all 0.2s ease-out;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  :hover {
    border: 2px solid #2b4255;
  }
`;
const IconContainer = styled.div`
  padding: 0.1rem;
`;
const StyledDel = styled(DeleteIcon)`
  color: #e71919;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
const StyledDone = styled(DoneIcon)`
  color: #19f804;
  margin-right: 0.5rem;
`;
const TodoSpan = styled.span`
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleComplete = (index) => {
    dispatch({ type: types.COMPLETE_TODO, payload: index });
    console.log(index);
  };
  const handleDelete = (index) => {
    dispatch({ type: types.DELETE_TODO, payload: index });
  };

  return (
    <Container>
      <TitleContainer>
        <Badge color='success' badgeContent={todos.length}>
          <Title>ToDo List</Title>
        </Badge>
      </TitleContainer>
      <TodoInput />
      <List>
        {todos.length >= 1 &&
          todos.map((todo, index) => (
            <Item key={index}>
              <TodoSpan onClick={() => handleComplete(index)}>
                {todo.todoName}
              </TodoSpan>
              <IconContainer>
                {todo.completed && <StyledDone />}
                <StyledDel onClick={() => handleDelete(index)} />
              </IconContainer>
            </Item>
          ))}
      </List>
    </Container>
  );
};

export default TodoList;
