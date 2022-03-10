import { createContext, useState, useEffect } from "react";

// create memory space
export const DynamicGlobalContext = createContext();

export const DynamicGlobalProvider = ({children}) =>{

    const [test, setTest] = useState(true);

    
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
                    test
                }}>
            {children}
        </DynamicGlobalContext.Provider>
    );

}