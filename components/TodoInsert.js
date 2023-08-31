import { useCallback, useState } from "react";
import "./TodoInsert.scss";
import {MdAdd} from 'react-icons/md'

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
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
            onChange={onChange}
            value={value} placeholder="할 일을 입력하세요" />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert;