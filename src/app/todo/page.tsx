"use client";

import { useState } from "react";
import Todo, { ITodo } from "../../components/todo";

const todoMock: ITodo[] = [
  {
    description: "Lavar louça",
  },
];

export default function Home() {
  const [todoList, setTodoList] = useState(todoMock);
  const [description, setDescription] = useState("");

  function handleAddTodo() {
    if (description) {
      setTodoList([
        {
          description: description,
        },
        ...todoList,
      ]);
      setDescription("");
    }
  }

  function handleOnChangeDescription(event: any) {
    setDescription(event.target.value);
  }

  function handleRemove(index: number) {
    setTodoList(todoList.filter((_, i) => i !== index));
  }

  return (
    <div className="flex justify-center bg-teal-400 text-white p-2 h-screen">
      <div className="flex-col border-solid border-4 border-teal-300 bg-teal-400 p-8 inline-block rounded-2xl max-w-xl">
        <div className="flex justify-center">
          <h1 className="text-2xl">My TODO List</h1>
        </div>
        <div className="flex space-x-2 mt-4 mb-4">
          <input
            name="description"
            value={description}
            onChange={handleOnChangeDescription}
            className="text-gray-500 p-2 rounded"
          />
          <div>
            <button className="bg-blue-400 p-2 rounded" onClick={handleAddTodo}>
              Add TODO
            </button>
          </div>
        </div>

        {todoList.map((todo, i) => (
          <Todo key={i} todo={todo} index={i} handleRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
}
