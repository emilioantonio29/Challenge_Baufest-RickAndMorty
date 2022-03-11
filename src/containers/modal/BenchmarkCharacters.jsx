import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import {DynamicGlobalContext} from '../../context/DynamicGlobalProvider'

const ModalBenchmarkCharacters = (props) =>{

    const {character1, setCharacter1, character2, setCharacter2, character3, setCharacter3} = React.useContext(DynamicGlobalContext); 


    const compare = (obj1, obj2) => {
        let data = 0;
        for(let i = 0; i<obj1.episode.length;i++){
            for(let j = 0; j<obj2.episode.length;j++){
                if(obj1.episode[i] == obj2.episode[j]){
                    data++;
                    break;
                }
            }
        }
        return data;
    }
    
    React.useEffect( async ()=>{
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
                        Comparativa de personajes
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <h4>+ INFO</h4> */}
                    <div className="card">
                        <div className="card-header">
                            Personaje 1: {character1.name ? character1.name : "No Cargado"}
                        </div>
                        <div className="card-body">
                            <p className="card-text">{character1.name && character2.name? `Cantidad de episodios compartidos con ${character2.name}: ${compare(character1,character2)}` : ""}</p>
                            <p className="card-text">{character1.name && character3.name? `Cantidad de episodios compartidos con ${character3.name}: ${compare(character1,character3)}` : ""}</p>
                        </div>
                    </div>
                    <br/>
                    <div className="card">
                        <div className="card-header">
                            Personaje 2: {character2.name ? character2.name : "No Cargado"}
                        </div>
                        <div className="card-body">
                            <p className="card-text">{character1.name && character2.name? `Cantidad de episodios compartidos con ${character1.name}: ${compare(character1,character2)}` : ""}</p>
                            <p className="card-text">{character2.name && character3.name? `Cantidad de episodios compartidos con ${character3.name}: ${compare(character2,character3)}` : ""}</p>
                        </div>
                    </div>
                    <br/>
                    <div className="card">
                        <div className="card-header">
                            Personaje 3: {character3.name ? character3.name : "No Cargado"}
                        </div>
                        <div className="card-body">
                            <p className="card-text">{character1.name && character3.name? `Cantidad de episodios compartidos con ${character1.name}: ${compare(character1,character3)}` : ""}</p>
                            <p className="card-text">{character2.name && character3.name? `Cantidad de episodios compartidos con ${character2.name}: ${compare(character2,character3)}` : ""}</p>
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