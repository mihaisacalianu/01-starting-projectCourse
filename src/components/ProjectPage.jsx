import { useContext, useState } from "react";
import  NewProjectData from "./states.jsx";
import ProjectTasks from "./ProjectTasks.jsx";
export default function ProjectPage({visibility,indexP,handleProjectDelete}){
  const projectInfo = useContext(NewProjectData);
  const [projectTasks, setProjectTasks] = useState([]);

  function handleInput(input) {
    setProjectTasks(()=> [...projectTasks,{name: input.current.value}]);
    console.log(input.current);
    // input.current.value = ""
  }

  function handleClearTask(index) {
    setProjectTasks((prev)=> prev.filter((task)=> task != prev[index]));
  }

  return(
    <div className={`flex-col ${!visibility ? 'hidden': ""} w-[70%] ml-10 mb-2`}>
      {projectInfo[indexP] ?
      <>
        <div className="flex justify-between w-[70%] mt-10 mb-3">
          <h2><strong>{projectInfo[indexP].title}</strong></h2>
          <button onClick={()=>handleProjectDelete(indexP)} className="hover:text-red-600">Delete</button>
        </div>
        <h3 className="mb-10 text-gray-400">{projectInfo[indexP].date}</h3>
        <span className="w-[70%] overflow-scroll">{projectInfo[indexP].description}</span>
        <div className="bg-gray-400 border-gray-400 h-[2px] w-[70%] my-4"></div>
        <ProjectTasks
        handleInput={handleInput}
        tasks={projectTasks}
        handleClearTask={handleClearTask}
       />
      </>
      :null}
    </div>
  );
}
