import { createContext, useState } from "react";

export const MyStore=createContext()
export const ContextProvider=({children})=>{
        const [search,setSearch]=useState("wildfire")
            const [images,setImages]=useState([])
   return( <MyStore.Provider value={{search,setSearch,images,setImages}}>{children}</MyStore.Provider>)

}