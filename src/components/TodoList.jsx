import * as React from 'react';
import TodoInput from './TodoInput';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Badge } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTodo, completeTodo } from '../state/actions';
const Container = styled.div`
  border: 1px solid #e3e7f1;
  border-radius: 5px;
  width: 40rem;
  padding: 2rem;
  background: linear-gradient(#ffffff 85%, #e3e7f1 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  cursor: pointer;
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
const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleComplete = (index) => {
    dispatch(completeTodo(index));
    console.log(index);
  };
  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
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
              <span onClick={() => handleComplete(index)}>{todo.todoName}</span>
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
