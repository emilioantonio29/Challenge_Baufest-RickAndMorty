import { createContext, useState, useEffect } from "react";
import axios from 'axios';

// create memory space
export const DynamicGlobalContext = createContext();

export const DynamicGlobalProvider = ({children}) =>{

    const [test, setTest] = useState(true);
    const [allCharacters, setAllCharacters] = useState([]);
    
    useEffect(()=>{
        //LOGIC: 


        return () =>{
        //Unmount
        }
      }, [])


    return(
        <DynamicGlobalContext.Provider 
            value={
                {
                    test, allCharacters
                }}>
            {children}
        </DynamicGlobalContext.Provider>
    );

}