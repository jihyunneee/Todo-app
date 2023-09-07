import { useState, useRef, useCallback } from 'react';
import ToDoEdit from './components/TodoEdit';
import ToDoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '필라테스 가기',
      checked: false,
    },
  ]);

  const nextId = useRef(2);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    if (todo.text === "") {
      alert("내용을 입력하세요.");
    } else {
      setTodos((todos) => todos.concat(todo)); //concat(): 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환
      nextId.current++; //nextId 1씩 더하기
    }
  }, []);

  const onRemove = useCallback((id) => {
    if(window.confirm("정말 삭제하시겠습니까?")) {
      alert("삭제 되었습니다.");
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    } else {
      alert("취소 되었습니다.");
    }
  }, []);

  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);

  const onInsertToggle = useCallback(() => { // toDoListItem의 '수정 아이콘'과 수정하기 팝업창의 '수정하기 버튼'에 onClick 이벤트로 넣어줄 함수
    if (selectedTodo) {
      setSelectedTodo((selectedTodo) => null);
    }
    setInsertToggle((prev) => !prev);
  }, [selectedTodo]);

  const onChangeSelectedTodo = (todo) => { // 클릭했을 때 해당 항목의 todo 객체를 selectedTodo에 저장
    setSelectedTodo((selectedTodo) => todo);
  };
  
  const onUpdate = useCallback(
    (id, text) => {
      onInsertToggle();
      setTodos((todos) =>
        todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
      );
    },
    [onInsertToggle],
  );

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      <ToDoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onRemove={onRemove}
        onChangeSelectedTodo={onChangeSelectedTodo}
        onInsertToggle={onInsertToggle}
      />
      {insertToggle && (
        <ToDoEdit
          onInsert={onInsert}
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onUpdate={onUpdate}
          insertToggle={insertToggle}
        />
      )}
    </TodoTemplate>
  );
}

export default App;
