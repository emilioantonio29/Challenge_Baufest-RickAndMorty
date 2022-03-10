import React from 'react';
import {NavLink} from 'react-router-dom'


const CardEpisode = (props) =>{

    React.useEffect(()=>{
        //LOGIC: 
        
        return () =>{
        //Unmount

        }
    }, [])


    return(
        <>

            <div className="card Episodes-card" style={{width: "18rem"}}>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div className="card-body">
                    <h5 className="card-title">Episodio</h5>
                    <p className="card-text">Nombre: {props.episodio.name}</p>
                    <p className="card-text">Fecha de emisión: {props.episodio.created}</p>
                    <p className="card-text">Código de episodio: {props.episodio.episode}</p>
                    <button className="btn btn-dark">Detalle</button>
                </div>
            </div>
        </>
    );
}

export default CardEpisode;