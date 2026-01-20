import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import EditForm from '../components/EditForm/EditForm';

import { useEffect, useState } from 'react';

const initTotos = [
  { id: '1', text: 'Practice more' },
  { id: '2', text: 'Get all tasks done on time' },
];

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const data = localStorage.getItem('localTodo');
    // console.log(data);

    if (!data) {
      return initTotos;
    }
    return data === '[]' ? initTotos : JSON.parse(data);
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem('localTodo', JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = inputValue => {
    if (fintTodo(inputValue.text)) {
      return;
    }
    setTodos(prevTodos => [...prevTodos, inputValue]);
  };

  const removeTodo = todoId => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  const editTodo = todoId => {
    setIsEditing(true);
    const todo = todos.find(todo => todo.id === todoId);
    setCurrentTodo(todo);
  };

  const cancelUpdate = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  const updateTodo = (id, text) => {
    if (fintTodo(text)) {
      return;
    }
    setTodos(prevTodos =>
      prevTodos.map(todo => (todo.id === id ? { ...todo, text } : todo))
    );
    setIsEditing(false);
    setCurrentTodo({});
  };

  const fintTodo = text => todos.some(todo => todo.text === text.trim());
  return (
    <>
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
      {isEditing ? (
        <EditForm
          defaultValue={currentTodo}
          cancelUpdate={cancelUpdate}
          updateTodo={updateTodo}
        />
      ) : (
        <Form onSubmit={addNewTodo} />
      )}
      <TodoList array={todos} onDelete={removeTodo} onEdit={editTodo} />
    </>
  );
};

export default Todos;
