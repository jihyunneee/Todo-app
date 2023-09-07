import { useCallback, useState } from "react";
import {MdAdd} from 'react-icons/md'
import styled from 'styled-components';

const Insert = styled.form`
    display: flex;
    background: #fffbd7;
    border-radius: 20px;
`;

const Input = styled.input`
    width: 100%;
    background: none;
    outline: none;
    border: none;
    padding: 0.7rem;
    font-size: 1rem;
    line-height: 1.5;
    color: black;

    &::placeholder {
        color: #b3b6b9;
    }

    // 버튼을 제외한 영역을 모두 차지하기
    flex : 1;
`;

const Submit = styled.button`
    background: none;
    outline: none;
    border: none;
    border-radius: 20px;
    background: hsl(36, 100%, 65%);
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;

    &:hover {
        background: hsl(36, 100%, 50%);
    }
`;

function TodoInsert({onInsert}) {
    
    const [value, setValue] = useState('');
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[])

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); //value 초기화
            e.preventDefault(); //기본이벤트(새로고침) 방지
        }
    ,[onInsert, value])
    
    return (
        <Insert onSubmit={onSubmit}>
            <Input 
            onChange={onChange}
            value={value} placeholder="할 일을 입력하세요" />
            <Submit>
                <MdAdd />
            </Submit>
        </Insert>
    )
}

export default TodoInsert;
