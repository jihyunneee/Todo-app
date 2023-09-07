import React from 'react';
import { FcTodoList } from 'react-icons/fc';
import styled from 'styled-components';

const Template = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  overflow: hidden;
  border-radius: 20px;
`;

const Title = styled.div`
  background: hsl(36, 100%, 83%);
  color: hsl(36, 100%, 50%);
  height: 4rem;
  font-size: 1.7rem;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Day = styled.div`
  background: hsl(36, 100%, 83%);
  color: hsl(36, 100%, 50%);
  height: 2rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
`;

const Content = styled.div`
  background: hsl(36, 100%, 83%);
`;

const TodoTemplate = ({ children }) => {
  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });

  return (
    <Template>
      <Title>
        {' '}
        <FcTodoList />
        &nbsp;My Todo List&nbsp;
        <FcTodoList />
      </Title>
      <Day>
        {dateString} {dayName} 　
      </Day>
      <Content>{children}</Content>
    </Template>
  );
};

export default TodoTemplate;
