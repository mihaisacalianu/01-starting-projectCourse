import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent.jsx"
import NewProjectForm from "./components/NewProjectForm.jsx";
import { useState,useContext } from "react";
import  NewProjectData from "./components/states.jsx";
import ProjectPage from "./components/ProjectPage.jsx";
function App() {
  const [newProjectForm, setNewProjectForm] = useState(false);
  const [mainContent, setMainContent] = useState("");
  const [projectPageVisbility, setProjectPageVisibility] = useState(false);
  const [projectIndex, setProjectIndex]= useState(null);
  const newProjectC = useContext(NewProjectData);

  function handleClick() {
    setNewProjectForm(true);
    setMainContent("hidden");
  }

  function handleForm(event,formData){
    event.preventDefault();
    newProjectC.push({
      title: formData.title,
      description: formData.description,
      date: formData.date,
      id: formData.id
    })
    setNewProjectForm(false);
    setMainContent("");
  }

  function handleProjectClick(index) {
    console.log('you pressed a project!',index)
    console.log(index)
    setMainContent("hidden");
    setProjectPageVisibility(true);
    setProjectIndex(index);
  }
  console.log('inside app component: ', projectIndex)
  return (
    <>
    <div className="flex">
    <NewProjectData.Provider value={newProjectC}>
      <SideBar
      handleProjectClick={handleProjectClick}/>
      <MainContent
      handleClick={handleClick}
      hideMainContent={mainContent}
      />
      {newProjectForm && <NewProjectForm handleForm={handleForm} hideMainContent={mainContent}/>}
      <ProjectPage
      visibility={projectPageVisbility} indexP={projectIndex}/>
    </NewProjectData.Provider>
    </div>
    </>
  );
}

export default App;
