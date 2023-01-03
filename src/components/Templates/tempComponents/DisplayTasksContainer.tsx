import { useState } from "react";
import {
  EllipsisVerticalIcon,
  XMarkIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { ToDoState, TodoType } from "../types";

export const DisplayTasksContainer = ({
  name,
  setItem,
  currentItems,
  index,
}: {
  name: string;
  setItem: React.Dispatch<React.SetStateAction<TodoType[]>>;
  currentItems: TodoType[];
  index: number;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col w-full ">
      <div className="w-full flex border shadow-sm p-4 items-center">
        <div className="w-full flex items-center justify-between space-x-2">
          <div className=" bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {name}
          </div>
          <div>
            <button
              className="btn btn-sm w-8 h-8"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <XMarkIcon /> : <EllipsisVerticalIcon />}
            </button>
          </div>
        </div>
      </div>
      <ContextMenu
        isMenuOpen={isMenuOpen}
        currentItems={currentItems}
        setItems={setItem}
        index={index}
      />
    </div>
  );
};

const ContextMenu = ({
  isMenuOpen,
  currentItems,
  setItems,
  index,
}: {
  isMenuOpen: boolean;
  currentItems: TodoType[];
  setItems: React.Dispatch<React.SetStateAction<TodoType[]>>;
  index: number;
}) => {
  // console.log(currentItems);

  const handleDeletion = () => {
    setItems((prev) => prev.filter((_, idx) => idx !== index));

    localStorage.setItem(
      "todo",
      JSON.stringify(currentItems.filter((_, idx) => idx !== index))
    );
  };

  const advanceState = (index: number, isAdvance: boolean) => {
    const updateTodos = currentItems.map((item, idx) => {
      if (idx === index) {
        switch (item.state) {
          case ToDoState.TASK:
            if (isAdvance) {
              //forward icon
              item.state = ToDoState.IN_PROGRESS;
            } else {
              //backward icon

              item.state = ToDoState.COMPLETED;
            }
            break;
          case ToDoState.IN_PROGRESS:
            if (isAdvance) {
              item.state = ToDoState.COMPLETED;
            } else {
              item.state = ToDoState.TASK;
            }
            break;
          case ToDoState.COMPLETED:
            if (isAdvance) {
              item.state = ToDoState.TASK;
            } else {
              item.state = ToDoState.IN_PROGRESS;
            }
            break;
        }
      }

      return item; //item with new state
    });

    setItems(updateTodos);
    localStorage.setItem("todo", JSON.stringify(updateTodos));
  };

  return (
    <motion.div
      className="flex justify-end items-center pr-1 space-x-4 w-full h-15  shadow-md rounded-sm border bg-gray-100"
      animate={
        isMenuOpen
          ? {
              height: "2rem",
              opacity: 1,
            }
          : { height: "0%", opacity: 0 }
      }
      transition={{ type: "tween" }}
    >
      <>
        <button
          className="btn btn-sm w-5 h-5"
          onClick={() => advanceState(index, false)}
        >
          <ChevronLeftIcon />
        </button>
        <button className="btn btn-sm w-5 h-5" onClick={handleDeletion}>
          <TrashIcon />
        </button>
        <button
          className="btn btn-sm w-5 h-5"
          onClick={() => advanceState(index, true)}
        >
          <ChevronRightIcon />
        </button>
      </>
    </motion.div>
  );
};
