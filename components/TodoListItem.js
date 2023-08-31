import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdEdit,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListltem.scss';

const TodoListltem = ({ todo, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle }) => {
  const { id, text, checked } = todo;

  return (
    <li className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>

      <div
        className="edit"
        onClick={() => {
          onChangeSelectedTodo(todo);
          onInsertToggle();
        }}
      >
        <MdEdit />
      </div>

      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </li>
  );
};

export default TodoListltem;
