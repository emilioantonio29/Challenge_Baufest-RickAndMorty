import React from 'react';
import axios from "axios";
import CardOneCharacter from '../personajeCard/CardOneCharacter'
import swal from 'sweetalert'
import {DynamicGlobalContext} from '../../context/DynamicGlobalProvider'

const OneCharacter = (props) =>{

    const {test} = React.useContext(DynamicGlobalContext); 

    const [loader, setLoader] = React.useState(false);
    const [characters, setCharacters] = React.useState([]);

    const episodeNotFound= () =>{
      swal({
          title: "¡Opps!",
          text: `Personaje no encontrado. Por favor intenta con otro nombre o id.`,
          icon: "warning",
          buttons: {
              confirm : {text:'Cerrar',className:'msgStyle'} 
          },
      });
    }

    const errorApi= () =>{
      swal({
          title: `¡Opps!`,
          text: `Error al consultar API: https://rickandmortyapi.com/api/character; por favor intenta mas tarde`,
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
          axios.get(`https://rickandmortyapi.com/api/character/${parseInt(props.character)}`).then((response) => {
            if(response.data.info){
              setCharacters([response.data.results[0]])
              setLoader(false)
            }else{
              setCharacters([response.data])
              setLoader(false)
            }
          })
            .then(()=>{
          })
            .catch((err)=>{
            // console.log(err.response.status)
            if(err.response.status == 404){
              episodeNotFound()
            }else{
              errorApi()
            }
          }).finally(()=>{
            setLoader(false)
          })
        }else{
          axios.get(`https://rickandmortyapi.com/api/character/?name=${props.character}`).then((response) => {
            if(response.data.info){
              setCharacters([response.data.results[0]])
              setLoader(false)
            }else{
              setCharacters([response.data])
              setLoader(false)
            }
          })
            .then(()=>{
          })
            .catch((err)=>{
            // console.log(err.response.status)
            if(err.response.status == 404){
              episodeNotFound()
            }else{
              errorApi()
            }
          }).finally(()=>{
            setLoader(false)
          })
        }


        return () =>{
        //Unmount

        }
    }, [props.render])


    return(
        <>
          <br/>
          {/* <button onClick={()=>console.log(props.characterNumber)}>episodes</button> */}
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
              {characters.map((element, index)=>{
                return(
                  <CardOneCharacter numero={props.characterNumber} character={element} key={index}></CardOneCharacter>
                )
              })}
            </div>
            }

        </>
    );
  }

export default OneCharacter;