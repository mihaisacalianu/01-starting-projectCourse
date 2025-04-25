import { useContext } from "react";
import  NewProjectData from "./states.jsx";
import ProjectTasks from "./ProjectTasks.jsx";
export default function ProjectPage({visibility,indexP,handleProjectDelete}){
  const projectInfo = useContext(NewProjectData);

  return(
    <div className={`flex-col ${!visibility ? 'hidden': ""} ml-10 mb-2 w-full`}>
      {projectInfo[indexP] ?
      <>
        <div className="flex justify-between w-[70%] mt-10 mb-3">
          <h2><strong>{projectInfo[indexP].title}</strong></h2>
          <button onClick={()=>handleProjectDelete(indexP)} className="hover:text-red-600">Delete</button>
        </div>
        <h3 className="mb-10 text-gray-400">{projectInfo[indexP].date}</h3>
        <p className="w-[70%]">{projectInfo[indexP].description}</p>
        <div className="bg-gray-400 border-gray-400 h-[2px] w-[70%] my-4"></div>
        <ProjectTasks/>
      </>
      :null}
    </div>
  );
}
