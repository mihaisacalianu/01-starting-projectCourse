import { useState } from "react";
export default function NewProjectForm({handleForm, handleChange}){
  const [formData, setFormData] = useState(
    {
      title: '',
      description: '',
      date: ''
    }
  );

  const inputStyle = "bg-gray-300 w-[100%] mb-3 p-1";


  function handleChange(event){
    const {name, value} = event.target;
    setFormData((prevFormData)=>({...prevFormData,[name]: value}))
  }

  return(
    <div className="flex-col w-[60%] h-[100dvh] px-8">
      <form action={()=>handleForm(event,formData)} className="flex-col gap-3 justify-center">
        <div className="flex justify-end items-center gap-3 w-full mb-6 mt-12">
          <button>Cancel</button>
          <button type="submit" value="Save"  className="bg-black text-white px-2 py-1 rounded-lg"/>
        </div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} className={inputStyle}/>
        <label htmlFor="description" >Description</label>
        <textarea className={inputStyle} name="description" value={formData.description} onChange={handleChange}></textarea>
        <label htmlFor="date">Due Date</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} className={inputStyle}/>
      </form>
    </div>);
  }
