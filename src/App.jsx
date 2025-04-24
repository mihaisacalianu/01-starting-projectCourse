import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent.jsx"
import NewProjectForm from "./components/NewProjectForm.jsx";
import { useState,useContext } from "react";
import  NewProjectData from "./components/states.jsx";
function App() {
  const [newProjectForm, setNewProjectForm] = useState(false);
  const [mainContent, setMainContent] = useState("");
  const newProjectC = useContext(NewProjectData);

  function handleClick() {
    setNewProjectForm(true);
    setMainContent("hidden");
  }

  function handleForm(event,formData){
    event.preventDefault();
    newProjectC.title = formData.title;
    newProjectC.description = formData.description;
    newProjectC.date = formData.date;
    setNewProjectForm(false);
    setMainContent("");
  }

  return (
    <>
    <div className="flex">
    <NewProjectData.Provider value={newProjectC}>
      <SideBar/>
      <MainContent
      handleClick={handleClick}
      hideMainContent={mainContent}
      />
      {newProjectForm && <NewProjectForm handleForm={handleForm}/>}
    </NewProjectData.Provider>
    </div>
    </>
  );
}

export default App;
