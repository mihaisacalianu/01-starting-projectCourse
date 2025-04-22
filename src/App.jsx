import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent"
import NewProjectForm from "./components/NewProjectForm";
function App() {
  return (
    <>
    <div className="flex">
     <SideBar/>
     <MainContent />
     <NewProjectForm/>
     </div>
    </>
  );
}

export default App;
