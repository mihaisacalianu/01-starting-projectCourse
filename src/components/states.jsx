import { createContext } from "react";

const NewProjectData = createContext(
  {
    title: '',
    description: '',
    date: ''
  }
);
export default NewProjectData;
