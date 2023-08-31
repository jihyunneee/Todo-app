import React from 'react';
import {
  FcTodoList
} from 'react-icons/fc';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });

  return (
    <div className="TodoTemplate">
      <div className="app-title"> <FcTodoList />&nbsp;My Todo List&nbsp;<FcTodoList /></div>
      <div className="day">{dateString} {dayName} 　</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
