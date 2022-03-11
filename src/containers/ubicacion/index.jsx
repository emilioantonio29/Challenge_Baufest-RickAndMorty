import React from 'react';
import axios from "axios";
import CardLocation from './LocationCard'
import swal from 'sweetalert'

const Character = (props) =>{

    const [loader, setLoader] = React.useState(false);
    const [locations, setLocations] = React.useState([]);

    const episodeNotFound= () =>{
      swal({
          title: "¡Opps!",
          text: `Ubicacion no encontrada. Por favor intenta con otro nombre o id.`,
          icon: "warning",
          buttons: {
              confirm : {text:'Cerrar',className:'msgStyle'} 
          },
      });
    }

    const errorApi= () =>{
      swal({
          title: `¡Opps!`,
          text: `Error al consultar API: https://rickandmortyapi.com/api/location; por favor intenta mas tarde`,
          icon: "error",
          buttons: {
              confirm : {text:'Cerrar',className:'msgStyle'}
             
          },
      });
    }

    React.useEffect(()=>{
        setLoader(true)
        //LOGIC: 
        if(props.numero){
          axios.get(`https://rickandmortyapi.com/api/location/${parseInt(props.location)}`).then((response) => {
            if(response.data.info){
              setLocations(response.data.results)
              setLoader(false)
            }else{
              setLocations([response.data])
              setLoader(false)
            }
          }).catch((err)=>{
            if(err.response.status == 404){
              episodeNotFound()
              setLoader(false)
            }else{
              errorApi()
              setLoader(false)
            }
          })
        }else{
          axios.get(`https://rickandmortyapi.com/api/location/?name=${props.location}`).then((response) => {
            if(response.data.info){
              setLocations(response.data.results)
              setLoader(false)
            }else{
              setLocations([response.data])
              setLoader(false)
            }
          }).catch((err)=>{
            console.log(err.response.status)
            if(err.response.status == 404){
              episodeNotFound()
              setLoader(false)
            }else{
              errorApi()
              setLoader(false)
            }
          })
        }


        return () =>{
        //Unmount

        }
    }, [props.render])


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
                {locations.map((element, index)=>{
                    return(
                    <CardLocation location={element} key={index}></CardLocation>
                    )
                })}
            </div>

            }

        </>
    );
  }

export default Character;