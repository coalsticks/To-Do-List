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
        <div className="flex space-x-14  w-full h-full justify-start mt-6 overflow-y-auto">
          <ListContainer
            title="Tasks"
            pulse={true}
            colorRef="bg-green-500"
            todos={currentItems.filter((todo) => todo.state === ToDoState.TASK)}
            indices={currentItems
              .map((item, index) => {
                if (item.state === ToDoState.TASK) {
                  return index;
                }
              })
              .filter((index) => index !== undefined)} // removing undefined values from the map
            currentItems={currentItems}
            setItem={setItem}
          />
          <ListContainer
            title="In Progress"
            pulse={false}
            colorRef="bg-amber-300"
            todos={currentItems.filter(
              (todo) => todo.state === ToDoState.IN_PROGRESS
            )}
            indices={currentItems
              .map((item, index) => {
                if (item.state === ToDoState.IN_PROGRESS) {
                  return index;
                }
              })
              .filter((index) => index !== undefined)}
            currentItems={currentItems}
            setItem={setItem}
          />
          <ListContainer
            title="Complete"
            pulse={false}
            colorRef="bg-red-600"
            todos={currentItems.filter(
              (todo) => todo.state === ToDoState.COMPLETED
            )}
            indices={currentItems
              .map((item, index) => {
                if (item.state === ToDoState.COMPLETED) {
                  return index;
                }
              })
              .filter((index) => index !== undefined)}
            currentItems={currentItems}
            setItem={setItem}
          />
        </div>
      </div>
    </div>
  );
};
