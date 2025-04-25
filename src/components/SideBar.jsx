import {useContext, useState} from "react";
import  NewProjectData from "./states.jsx";


export default function SideBar({handleProjectClick, handleClick}){
  const projectInfo = useContext(NewProjectData);

  return(
    <>
      <div className="flex-col justify-center items-center text-center bg-black text-white rounded-tr-lg h-[100dvh] mt-6 w-[30%]">
        <h1 className="mb-5 mt-10">YOUR PROJECTS</h1>
        <button className="bg-gray-800 text-sm rounded-md p-1 hover:bg-gray-600" onClick={handleClick}>+ Add Project</button>
        <div className="flex-col">
          {projectInfo.map((project,index)=>{
            return project.title ? <button onClick={()=>handleProjectClick(index)} key={index} className="mt-4 bg-gray-900 p-1.5 w-[80%] text-left hover:bg-gray-600">{project.title}</button>: null
          })}
        </div>
      </div>
    </>
  );

}
