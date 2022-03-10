import React from 'react';


const EpisodeDetail = (props) =>{

    
    React.useEffect(()=>{
        //LOGIC: 

        return () =>{
        //Unmount

        }
    }, [])


    return(
        <>
            <p>{props.characterList}</p>
        </>
    );
}

export default EpisodeDetail;