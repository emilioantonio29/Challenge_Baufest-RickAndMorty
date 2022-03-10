import React from 'react';
import axios from "axios";

const EpisodeDetail = (props) =>{
    const [name, setName] = React.useState();
    const [pic, setPic] = React.useState();
    const [loader, setLoader] = React.useState(true);

    React.useEffect(()=>{
        //LOGIC: 

        axios.get(`${props.characterList}`).then((response) => {
            setName(response.data.name)
            setPic(response.data.image)
        }).catch((err)=>{

        }).finally(()=>{
            setLoader(false)
        })

        return () =>{
        //Unmount

        }
    }, [])


    return(
        <>
            {loader ? 
            <div className="">
                <div style={{padding: "10px"}} className='d-flex justify-content-start'>
                    <div  className="spinner-grow text-muted"></div>
                    <div style={{marginLeft: "5px"}} className="spinner-grow text-muted"></div>
                    <div style={{marginLeft: "5px"}} className="spinner-grow text-muted"></div>
                </div>
            </div>
            :
            <div className='d-flex align-items-center'>
                <p style={{marginRight: "10px"}}><img src={pic} alt="" width="50" height="46" className="d-inline-block align-text-top"/></p>
                <p>{name ? name : <></>}</p>
            </div>
            }
        </>
    );
}

export default EpisodeDetail;