import React from 'react';
import {NavLink} from 'react-router-dom'
import ModalEpisode from '../modal/index'

const CardEpisode = (props) =>{

    const [modalShow, setModalShow] = React.useState(false);

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
                    <div className='d-flex justify-content-center'>                        
                        <h5 className="card-title">Episodio</h5>
                    </div>
                    <p className="card-text"><strong>Nombre:</strong> {props.episodio.name}</p>
                    <p className="card-text"><strong>Fecha de emisión:</strong> {props.episodio.air_date}</p>
                    <p className="card-text"><strong>Código de episodio:</strong> {props.episodio.episode}</p>
                    <div className='d-flex justify-content-center'>
                        <button onClick={() => setModalShow(true)}  className="btn btn-dark">+ Info</button>
                    </div>
                </div>
            </div>
            <ModalEpisode
                data={props.episodio}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default CardEpisode;