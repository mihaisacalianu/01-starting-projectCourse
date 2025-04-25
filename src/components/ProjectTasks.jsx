export default function ProjectTasks() {
  return(
    <div className="flex-col">
      <h2 className="mb-4"><strong>Tasks</strong></h2>
      <input type="text" name="task-name" className="mr-4 bg-slate-200" />
      <button>Add Task</button>
      <div className="flex-col justify-between w-[70%] mt-10 bg-slate-100 p-3 rounded-md">
        <div className="flex justify-between mt-2">
          <p>Task name</p>
          <button className="hover:text-red-600">Clear</button>
        </div>
        <div className="flex justify-between mt-2">
          <p>Task name</p>
          <button className="hover:text-red-600">Clear</button>
        </div>
        <div className="flex justify-between mt-2">
          <p>Task name</p>
          <button className="hover:text-red-600">Clear</button>
        </div>
      </div>
    </div>
  );
}
