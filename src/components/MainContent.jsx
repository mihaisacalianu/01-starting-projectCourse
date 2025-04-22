import noProjects from "../assets/no-projects.png";
export default function MainContent({handleClick, hideMainContent}){
  return(
    <>
      <div className={`flex-col ${hideMainContent} justify-center items-center text-center h-[100dvh] mt-6 w-[70%]`}>
        <img src={noProjects} alt="no projects image" className="h-[100px] w-[100px] mx-auto"/>
        <h2 className="font-extrabold mb-4">No Project Selected</h2>
        <p>Select a project or get started with a new one</p>
        <button onClick={handleClick} className="bg-black text-gray-400 px-2 py-1 rounded-lg mt-4">Create new project</button>
      </div>
    </>
  );

}
