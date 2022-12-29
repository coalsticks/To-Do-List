import { useState } from "react";
import {
  EllipsisVerticalIcon,
  XMarkIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export const DisplayTasksContainer = ({ name }: { name: string }) => {
  // const displayData = (todos: TodoType[], state: ToDoState) => {
  //   const myTodos = [];
  //   for (const todo of todos) {
  //     if (todo.state === state) {
  //       myTodos.push(todo);
  //     }
  //   }
  // };

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
      <ContextMenu isMenuOpen={isMenuOpen} />
    </div>
  );
};

const ContextMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <motion.div
      className="flex justify-end items-center  space-x-4 w-full h-15  shadow-md rounded-sm border bg-gray-50"
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
      <button className="btn btn-sm w-5 h-5">
        <ChevronRightIcon />
      </button>

      <button className="btn btn-sm w-5 h-5">
        <ChevronLeftIcon />
      </button>
      <button className="btn btn-sm w-5 h-5">
        <TrashIcon />
      </button>
    </motion.div>
  );
};
