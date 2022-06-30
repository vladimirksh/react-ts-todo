import React from 'react';
import TodoItem from './TodoItem';
import {ITodo} from '../types/data';


interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
} 

const TodoList: React.FC<ITodoListProps> = (props) => {
  const {items, toggleTodo, removeTodo} = props;
  return (
    <div>
      {
        items.map(todo => 
          <TodoItem
            key = {todo.id} 
            {...todo}
            toggleTodo = {toggleTodo}
            removeTodo = {removeTodo}
            />
          )
      }
    </div>
  );
}

export default TodoList;
