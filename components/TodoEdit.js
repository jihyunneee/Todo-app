import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.548);
`;

const Insert = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EditText = styled.h2`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  text-align: center;
  padding: 0.5rem;
  background-color: hsl(36, 100%, 83%);
  color: hsl(36, 100%, 50%);
`;

const Input = styled.input`
  margin: 2rem 0;
  padding: 0.3rem;
  border: none;
  outline: none;
  border-bottom: 1px solid hsl(36, 100%, 83%);
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Submit = styled.button`
  cursor: pointer;
  background-color: hsl(36, 100%, 83%);
  border: none;
  color: hsl(36, 100%, 50%);
  padding: 0.5rem 1.5rem;
  margin-bottom: 1rem;
  margin-right: -1rem;
  border-radius: 20px;
`;

function TodoEdit({ selectedTodo, onUpdate }) {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onUpdate(selectedTodo.id, value);
      setValue(''); //value 초기화
      e.preventDefault(); //기본이벤트(새로고침) 방지
    },
    [onUpdate, value],
  );

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <Background>
      <Insert onSubmit={onSubmit}>
        <EditText>수정하기</EditText>
        <Input
          onChange={onChange}
          value={value}
          placeholder="할 일을 입력하세요"
        />
        <Buttons>
          <Submit>수정</Submit>
        </Buttons>
      </Insert>
    </Background>
  );
}

export default TodoEdit;
