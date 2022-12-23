export const ToDo = () => {
  return (
    <div className="flex flex-col h-screen w-screen items-center bg-gray-100">
      {/* TITLE */}
      <div>
        <h1 className="flex justify-center text-6xl p-10">To-Do List</h1>
      </div>

      {/* MAIN CONTAINER */}
      <div className="flex flex-col justify-center w-[70%] h-[80%]">
        {/* ADD ITEM */}
        <div className="bg-gray-50  min-w-lg m-4 flex shadow-sm border rounded-md">
          <div className="w-[50%] h-[40%] rounded-md">
            <div className="flex justify-between p-4">
              <h1 className="text-2xl">Add Task</h1>
            </div>
            <div className="flex p-4 space-x-3">
              <input
                placeholder="Type Here"
                type="text"
                id="small-input"
                className="min-w-lg block w-[60%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button
                type="button"
                className="w-12 h-9 bg-green-500 hover:bg-green-700 rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
              />
              <button
                type="button"
                className="w-12 h-9 bg-amber-300 hover:bg-amber-500  rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
              />
              <button
                type="button"
                className="w-12 h-9 bg-red-600 hover:bg-red-700  rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
              />
            </div>
          </div>
        </div>
        {/* LIST CONTAINERS */}
        <div className="flex space-x-14  w-full h-full justify-start m-4">
          {/* TASKS */}
          <div className="bg-gray-50  w-[30%] h-full shadow-sm rounded-md border">
            <div className="flex justify-between p-4 shadow-sm">
              <h1 className="text-2xl">Tasks</h1>
              <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          {/* IN PROGRESS */}
          <div className="bg-gray-50  w-[30%] h-full shadow-sm border rounded-md">
            <div className="flex justify-between p-4 shadow-sm">
              <h1 className="text-2xl">In Progress</h1>
              <div className="w-8 h-8 bg-amber-300 rounded-full"></div>
            </div>
            <div className=""></div>
          </div>
          {/* COMPLETE */}
          <div className="bg-gray-50  w-[30%] h-full shadow-sm border rounded-md">
            <div className="flex justify-between p-4 shadow-sm">
              <h1 className="text-2xl">Complete</h1>
              <div className="w-8 h-8 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
