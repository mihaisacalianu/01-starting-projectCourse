export default function NewProjectForm(){
  const inputStyle = "bg-gray-300 w-[100%] mb-3 p-1"
  return(
    <div className="flex-col w-[60%] h-[100dvh] px-8">
      <form action="" className="flex-col gap-3 justify-center">
        <div className="flex justify-end items-center gap-3 w-full mb-6 mt-12">
          <button>Cancel</button>
          <input type="submit" value="Save" className="bg-black text-white px-2 py-1 rounded-lg"/>
        </div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" className={inputStyle}/>
        <label htmlFor="description" >Description</label>
        <textarea className={inputStyle} name="decription"></textarea>
        <label htmlFor="date">Due Date</label>
        <input type="date" className={inputStyle}/>
      </form>
    </div>);
  }
