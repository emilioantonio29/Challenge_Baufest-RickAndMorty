import { createContext, useState, useEffect } from "react";
import axios from 'axios';

// create memory space
export const DynamicGlobalContext = createContext();

export const DynamicGlobalProvider = ({children}) =>{

    const [test, setTest] = useState(true);
    const [character1, setCharacter1] = useState({});
    const [character2, setCharacter2] = useState({});
    const [character3, setCharacter3] = useState({});

    const [resultCharacter12, setResultCharacter12] = useState({});
    const [resultCharacter23, setResultCharacter23] = useState({});
    const [resultCharacter13, setResultCharacter13] = useState({});

    const compare = (obj1, obj2) => {
        let data = 0;
        for(let i = 0; i<obj1.episode.length;i++){
            for(let j = 0; j<obj2.episode.length;j++){
                if(obj1.episode[i] == obj2.episode[j]){
                    data++;
                    break;
                }
            }
        }
        return data;
    }

    
    
    useEffect(async ()=>{
        //LOGIC: 




        return () =>{
        //Unmount
        }
      }, [character1, character2, character3])


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