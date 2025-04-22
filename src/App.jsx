import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent"
import NewProjectForm from "./components/NewProjectForm";
import { useState } from "react";
function App() {
  const [newProjectForm, setNewProjectForm] = useState(false);
  const [mainContent, setMainContent] = useState("");
  function handleClick() {
    setNewProjectForm(true);
    setMainContent("hidden");
  }
  return (
    <>
    <div className="flex">
     <SideBar/>
     <MainContent
     handleClick={handleClick}
     hideMainContent={mainContent}
     />
      {newProjectForm && <NewProjectForm/>}
     </div>
    </>
  );
}

export default App;
