import {useContext, useState} from "react";
import  NewProjectData from "./states.jsx";


export default function SideBar(){
  const projectInfo = useContext(NewProjectData);
  console.log("inside sideBar component: ", projectInfo.title)
  return(
    <>
      <div className="flex-col justify-center items-center text-center bg-black text-white rounded-tr-lg h-[100dvh] mt-6 w-[30%]">
        <h1 className="mb-5 mt-10">YOUR PROJECTS</h1>
        <button className="bg-slate-400 rounded-md p-1">+ Add Project</button>
        <div className="flex-col">
          <h3 className="text-white">{projectInfo.title}</h3>
        </div>
      </div>
    </>
  );

}
