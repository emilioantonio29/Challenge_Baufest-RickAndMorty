import { createContext, useState, useEffect } from "react";
import axios from 'axios';

// create memory space
export const DynamicGlobalContext = createContext();

export const DynamicGlobalProvider = ({children}) =>{

    const [test, setTest] = useState(true);
    const [character1, setCharacter1] = useState({});
    const [character2, setCharacter2] = useState({});
    const [character3, setCharacter3] = useState({});
    
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
                    test, character1, setCharacter1, character2, setCharacter2, character3, setCharacter3
                }}>
            {children}
        </DynamicGlobalContext.Provider>
    );

}