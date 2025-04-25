import { useContext } from "react";
import  NewProjectData from "./states.jsx";
export default function ProjectPage({visibility,indexP}){
  const projectInfo = useContext(NewProjectData);

  return(
    <div className={`flex-col ${!visibility ? 'hidden': ""} mb-2`}>
      {projectInfo[indexP] ? <h1><strong>Project name: </strong>{projectInfo[indexP].title}</h1>: null}
    </div>
  );
}
