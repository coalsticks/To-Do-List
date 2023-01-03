import { DisplayTasksContainer } from "./tempComponents/DisplayTasksContainer";
import { TodoType } from "./types";

export const ListContainer = ({
  title,
  pulse,
  colorRef,
  todos,
  currentItems,
  setItem,
  indices,
}: {
  title: string;
  pulse: boolean;
  colorRef: string;
  todos: TodoType[];
  currentItems: TodoType[];
  setItem: React.Dispatch<React.SetStateAction<TodoType[]>>;
  indices: (number | undefined)[];
}) => {
  return (
    <div className="w-full h-full">
      {/* TASKS */}
      <div className="bg-gray-50 h-auto shadow-sm rounded-md border">
        <div className="flex justify-between p-4 shadow-sm">
          <h1 className="text-2xl">{title}</h1>
          <div
            className={`w-8 h-8 ${colorRef} rounded-full ${
              pulse ? "animate-pulse" : "animate-none"
            }`}
          ></div>
        </div>
        <div className="flex flex-col justify-center items-center p-2">
          {todos.map((todo, index) => (
            <DisplayTasksContainer
              key={index}
              name={todo.name}
              setItem={setItem}
              currentItems={currentItems}
              index={indices[index]!} // it is definitely defined ;)
            />
          ))}
        </div>
      </div>
    </div>
  );
};
