import { useContext } from "react";
import  NewProjectData from "./states.jsx";
export default function ProjectPage(){
  const projectInfo = useContext(NewProjectData);
  console.log(projectInfo);
  return(
    <>
    {projectInfo.map((project,index)=>{
      return <h1 key={index}>{project.title}</h1>
    })}
    </>
  );
}
