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
    setProjectPageVisibility(false);
  }

  function handleForm(event,formData){
    event.preventDefault();
    newProjectC.push({
      title: formData.title,
      description: formData.description,
      date: formData.date,
      id: formData.id,
      tasks: []
    })
    setNewProjectForm(false);
    setMainContent("");
  }

  function handleProjectClick(index) {
    setMainContent("hidden");
    setProjectPageVisibility(true);
    setProjectIndex(index);
    setNewProjectForm(false);
  }

  function handleProjectDelete(indexP) {
    newProjectC.pop(indexP)
    setMainContent("");
    setProjectPageVisibility(false);
  }

  function handleCancel() {
    console.log('you pressed')
    setNewProjectForm(false);
    setMainContent("");
  }

  return (
    <>
    <div className="flex">
    <NewProjectData.Provider value={newProjectC}>
      <SideBar
        handleProjectClick={handleProjectClick}
        handleClick={handleClick}
      />
      <MainContent
        handleClick={handleClick}
        hideMainContent={mainContent}
      />
      {newProjectForm && <NewProjectForm
       handleForm={handleForm}
       hideMainContent={mainContent}
       handleCancel={handleCancel}/>}
      <ProjectPage
        visibility={projectPageVisbility}
        indexP={projectIndex}
        handleProjectDelete={handleProjectDelete}
       />
    </NewProjectData.Provider>
    </div>
    </>
  );
}

export default App;
