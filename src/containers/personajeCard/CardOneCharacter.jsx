import React from 'react';
import {NavLink} from 'react-router-dom'
import {DynamicGlobalContext} from '../../context/DynamicGlobalProvider'

const CardOneCharacter = (props) =>{

    const {character1, setCharacter1, character2, setCharacter2, character3, setCharacter3} = React.useContext(DynamicGlobalContext); 

    React.useEffect(()=>{
        //LOGIC: 
        props.numero == 1 ? setCharacter1(props.character) : props.numero == 2 ? setCharacter2(props.character) : setCharacter3(props.character)
        return () =>{
        //Unmount

        }
    }, [])


    return(
        <>  
            <p className="card-text"><strong>Nombre:</strong> {props.character.name}</p>
            <p className="card-text"><strong>Genero:</strong> {props.character.gender}</p>
            <p className="card-text"><strong>Ubicación:</strong> {props.character.location.name}</p>
            <p className="card-text"><strong>Especie:</strong> {props.character.species}</p>
            <p className="card-text"><strong>Estado:</strong> {props.character.status}</p>
        </>
    );
}

export default CardOneCharacter;