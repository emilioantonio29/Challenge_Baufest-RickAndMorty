import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import EpisodeDetail from './EpisodeDetail'

const ModalEpisode = (props) =>{

    
    React.useEffect(()=>{
        //LOGIC: 

        return () =>{
        //Unmount

        }
    }, [])


    return(
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        + INFO
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <h4>+ INFO</h4> */}
                    <p>
                        <strong>Creado: </strong> {props.data.created}
                    </p>
                    <p>
                        <strong>Id: </strong> {props.data.id}
                    </p>
                    <p>
                        <strong>Url: </strong> {props.data.url}
                    </p>
                    <div>
                        <h5>Apariciones de personajes:</h5>
                        {props.data.characters.map((element, index)=>{
                            return(
                                <EpisodeDetail characterList={element} key={index}></EpisodeDetail>
                            )
                        })}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <button onClick={()=>console.log(props.data)}>episodes</button> */}
                    <Button className='btn btn-dark' onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEpisode;