import React from 'react';
import axios from "axios";
import CardEpisode from '../episodioCard/index'
import swal from 'sweetalert'

const OneEpisode = (props) =>{

    const [loader, setLoader] = React.useState(false);
    const [episodes, setEpisodes] = React.useState([]);

    const episodeNotFound= () =>{
      swal({
          title: "¡Opps!",
          text: `Episodio no encontrado. Por favor intenta nuevamente con otro id.`,
          icon: "warning",
          buttons: {
              confirm : {text:'Cerrar',className:'msgStyle'} 
          },
      });
    }

    const errorApi= () =>{
      swal({
          title: `¡Opps!`,
          text: `Error al consultar API: https://rickandmortyapi.com/api/episode; por favor intenta mas tarde`,
          icon: "error",
          buttons: {
              confirm : {text:'Cerrar',className:'msgStyle'}
             
          },
      });
    }

    React.useEffect(()=>{
        setLoader(true)
        //LOGIC: 
        axios.get(`https://rickandmortyapi.com/api/episode/${props.episode}`).then((response) => {
          if(response.data.info){
            setEpisodes(response.data.results)
            setLoader(false)
          }else{
            setEpisodes([response.data])
            setLoader(false)
          }
        })
          .then(()=>{
        })
          .catch((err)=>{
          console.log(err.response.status)
          if(err.response.status == 404){
            episodeNotFound()
            setLoader(false)
          }else{
            errorApi()
            setLoader(false)
          }
        })

        return () =>{
        //Unmount

        }
    }, [props.episode])


    return(
        <>
          <br/>
          <br/>
          {/* <button onClick={()=>console.log(episodes)}>episodes</button> */}
            {loader ? 
            <div className="">
                <div style={{padding: "10px"}} className='d-flex justify-content-center'>
                    <div  className="spinner-grow text-muted"></div>
                    <div style={{marginLeft: "5px"}} className="spinner-grow text-muted"></div>
                    <div style={{marginLeft: "5px"}} className="spinner-grow text-muted"></div>
                </div>
            </div>
            : 
              <div className='row d-flex justify-content-center'>
                {episodes.map((element, index)=>{
                  return(
                    <CardEpisode episodio={element} key={index}></CardEpisode>
                  )
                })}
              </div>
            }

        </>
    );
  }

export default OneEpisode;