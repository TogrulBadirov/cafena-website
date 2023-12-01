import { useContext, useState } from "react";
import { createContext } from "react";

export const CommonContext=createContext()
const CommonProvider = ({children}) => {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    
  const data={
    isSideBarOpen,
    setIsSideBarOpen
  }

  return (
    <CommonContext.Provider value={data}>
        {children}
    </CommonContext.Provider>
  )
}

export default CommonProvider
export const useCommonContext=()=>useContext(CommonContext)
