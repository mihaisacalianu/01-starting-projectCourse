import { useState, useRef } from "react";

export default function ProjectTasks({handleInput, tasks, handleClearTask}) {

  const input = useRef();

  return(
    <div className="flex-col">
      <h2 className="mb-4"><strong>Tasks</strong></h2>
      <input type="text" name="task-name"  ref={input} className="mr-4 bg-slate-200" />
      <button onClick={()=>handleInput(input)}>Add Task</button>
      <div className="flex-col justify-between w-[70%] mt-10 bg-slate-100 p-3 rounded-md">
        <div className="flex-col mt-2 items-center justify-center">
          { tasks.length > 0 ?
            tasks.map((task,index)=>{
              return(
                <div className={`flex justify-between mb-2`} key={index}>
                  <p>{task.name}</p>
                  <button onClick={()=>handleClearTask(index)} className="hover:text-red-600">Clear</button>
                </div>
              )
            }) : <p>You have no tasks!</p>
          }
        </div>
      </div>
    </div>
  );
}
