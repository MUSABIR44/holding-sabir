import React, { useState } from 'react';
import { Plus, Trash2, Check, X, Edit2 } from 'lucide-react';
import TodoForm from './TodoForm';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Market alışverişi yap', completed: false },
    { id: 2, text: 'Faturalar ödenecek', completed: true },
  ]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id: number, newText: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
    setEditingId(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <TodoForm onSubmit={addTodo} />
      
      <div className="mt-6 space-y-2">
        {todos.map(todo => (
          <div
            key={todo.id}
            className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
              todo.completed ? 'bg-gray-50' : 'bg-blue-50'
            }`}
          >
            {editingId === todo.id ? (
              <TodoForm
                initialValue={todo.text}
                onSubmit={(text) => updateTodo(todo.id, text)}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <>
                <div className="flex items-center">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`p-1 rounded-md mr-3 ${
                      todo.completed ? 'text-green-600' : 'text-gray-400'
                    }`}
                  >
                    <Check className="h-5 w-5" />
                  </button>
                  <span
                    className={`${
                      todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingId(todo.id)}
                    className="p-1 text-blue-600 hover:bg-blue-100 rounded-md"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="p-1 text-red-600 hover:bg-red-100 rounded-md"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {todos.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Henüz yapılacak bir görev eklenmemiş
        </div>
      )}
    </div>
  );
};

export default TodoList;