import { useState } from "react";
import { ListContainer } from "./Templates/ListContainer";
import { ToDoRegistration } from "./Templates/ToDoRegistration";
import { ToDoState, TodoType } from "./Templates/types";

export const ToDo = () => {
  const [currentItems, setItem] = useState(
    JSON.parse(localStorage.getItem("todo") || "[]") as TodoType[]
  );

  return (
    <div className="flex flex-col h-screen w-screen items-center bg-gray-100">
      {/* TITLE */}
      <div>
        <h1 className="flex justify-center text-6xl p-10 select-none">
          To-Do List
        </h1>
      </div>

      {/* MAIN CONTAINER */}
      <div className="flex flex-col justify-center w-[70%] h-[80%]">
        {/* ADD ITEM */}
        <ToDoRegistration setItem={setItem} />
        {/* LIST CONTAINERS */}
        <div className="flex space-x-14  w-full h-full justify-start mt-6">
          <ListContainer
            title="Tasks"
            pulse={true}
            colorRef="bg-green-500"
            todos={currentItems.filter((todo) => todo.state === ToDoState.TASK)}
          />
          <ListContainer
            title="In Progress"
            pulse={false}
            colorRef="bg-amber-300"
            todos={currentItems.filter(
              (todo) => todo.state === ToDoState.IN_PROGRESS
            )}
          />
          <ListContainer
            title="Complete"
            pulse={false}
            colorRef="bg-red-600"
            todos={currentItems.filter(
              (todo) => todo.state === ToDoState.COMPLETED
            )}
          />
        </div>
      </div>
    </div>
  );
};
