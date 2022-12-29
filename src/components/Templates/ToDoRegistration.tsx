import ArrowPathIcon from "@heroicons/react/24/solid/ArrowPathIcon";
import React, { useRef } from "react";
import { ToDoState, TodoType } from "./types";

export const ToDoRegistration = ({
  setItem,
}: {
  setItem: React.Dispatch<React.SetStateAction<TodoType[]>>;
}) => {
  const itemRef = useRef<HTMLInputElement>(null);

  const resetLocalStorage = () => {
    localStorage.setItem("todo", JSON.stringify([]));
    setItem([]);
  };

  const handleSubmit = (state: ToDoState) => {
    if (itemRef.current?.value) {
      const todo = JSON.parse(
        localStorage.getItem("todo") ?? "[]"
      ) as TodoType[];
      todo.push({ name: itemRef.current.value, state: state });
      localStorage.setItem("todo", JSON.stringify(todo));
      itemRef.current.value = "";

      setItem(todo);
    }
  };
  return (
    <div>
      {/* ADD ITEM */}
      <div className="bg-gray-50  min-w-xl flex shadow-sm border rounded-md">
        <div className="w-[50%] h-[40%] rounded-md">
          <div className="flex justify-between p-4">
            <h1 className="text-2xl">Add Task</h1>
          </div>
          <div className="flex p-4 space-x-3">
            <input
              ref={itemRef}
              placeholder="Type Here"
              type="text"
              id="small-input"
              className="min-w-lg block w-[60%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <button
              onClick={() => handleSubmit(ToDoState.TASK)}
              type="button"
              className={`w-12 h-9 bg-green-500 hover:bg-green-700 rounded-lg px-5 py-2.5  mr-2 mb-2`}
            />
            <button
              onClick={() => handleSubmit(ToDoState.IN_PROGRESS)}
              type="button"
              className={`w-12 h-9 bg-amber-300 hover:bg-amber-500 rounded-lg px-5 py-2.5  mr-2 mb-2`}
            />
            <button
              onClick={() => handleSubmit(ToDoState.COMPLETED)}
              type="button"
              className={`w-12 h-9 bg-red-600 hover:bg-red-700 rounded-lg px-5 py-2.5  mr-2 mb-2`}
            />
            <button
              onClick={resetLocalStorage}
              type="button"
              className="flex justify-center items-center w-12 h-9 bg-gray-200 hover:bg-gray-400 content-center rounded-lg  mr-2 mb-2"
            >
              <ArrowPathIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
