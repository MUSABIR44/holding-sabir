import React, { useState, useEffect } from 'react';
import { Plus, Check, X } from 'lucide-react';

interface TodoFormProps {
  initialValue?: string;
  onSubmit: (text: string) => void;
  onCancel?: () => void;
}

const TodoForm = ({ initialValue = '', onSubmit, onCancel }: TodoFormProps) => {
  const [text, setText] = useState(initialValue);

  useEffect(() => {
    setText(initialValue);
  }, [initialValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Yeni görev ekle..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        autoFocus
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
      >
        {initialValue ? (
          <Check className="h-5 w-5" />
        ) : (
          <>
            <Plus className="h-5 w-5 mr-1" />
            Ekle
          </>
        )}
      </button>
      {onCancel && (
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </form>
  );
};

export default TodoForm;