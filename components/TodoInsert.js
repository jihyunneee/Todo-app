import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './Todolnsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback ( // onSubmit은 엔터를 눌러도 이벤트 발생함! onClick은 버튼 클릭시만!
    e => {
        onInsert(value);
        setValue('');
        e.preventDefault(); //submit 이벤트가 발생할 때 새로고침을 발생시키지 X
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
