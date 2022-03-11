import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import {DynamicGlobalContext} from '../../context/DynamicGlobalProvider'

const ModalBenchmarkCharacters = (props) =>{

    const {character1, setCharacter1, character2, setCharacter2, character3, setCharacter3} = React.useContext(DynamicGlobalContext); 
    
    React.useEffect(()=>{
        //LOGIC: 
        console.log(character1)

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
                        Comparativa de personajes
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <h4>+ INFO</h4> */}
                    <button onClick={()=>console.log(character1)}>test</button>
                    <div className="card">
                        <div className="card-header">
                            Personaje 1: {character1.name ? character1.name : "No Cargado"}
                        </div>
                        <div className="card-body">
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    <br/>
                    <div className="card">
                        <div className="card-header">
                            Personaje 2: {character2.name ? character2.name : "No Cargado"}
                        </div>
                        <div className="card-body">
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    <br/>
                    <div className="card">
                        <div className="card-header">
                            Personaje 3: {character3.name ? character3.name : "No Cargado"}
                        </div>
                        <div className="card-body">
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
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

export default ModalBenchmarkCharacters;