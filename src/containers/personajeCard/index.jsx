import React from 'react';
import {NavLink} from 'react-router-dom'
import ModalEpisode from '../modal/index'

const CardCharacter = (props) =>{

    const [modalShow, setModalShow] = React.useState(false);
    // fix porque el componente renderiza al colocar un dato en el input
    const [episode, setEpisode] = React.useState(false);

    React.useEffect(()=>{
        //LOGIC: 
        let result = props.episodio.split("/")
        setEpisode(result[result.length-1])

        return () =>{
        //Unmount

        }
    }, [])


    return(
        <>

            <div className="card Episodes-card" style={{width: "18rem"}}>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div className="card-body">
                    <div className='d-flex justify-content-center'>                        
                        <h5 className="card-title">Personaje</h5>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <p><img src={props.character.image} alt="" width="100" height="86" className="d-inline-block align-text-top"/></p>
                    </div>
                    <p className="card-text"><strong>Nombre:</strong> {props.character.name}</p>
                    <p className="card-text"><strong>Genero:</strong> {props.character.gender}</p>
                    <p className="card-text"><strong>Ubicacion:</strong> {props.character.location.name}</p>
                    <p className="card-text"><strong>Participó en el episodio:</strong> {episode}</p>

                    {/* <p className="card-text"><strong>Fecha de emisión:</strong> {props.episodio.air_date}</p>
                    <p className="card-text"><strong>Código de episodio:</strong> {props.episodio.episode}</p> */}
                    <div className='d-flex justify-content-center'>
                    </div>
                </div>
            </div>
            {/* <ModalEpisode
                data={props.episodio}
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}
        </>
    );
}

export default CardCharacter;