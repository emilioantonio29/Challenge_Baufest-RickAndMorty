import React from 'react';
import Navigation from '../Navigation';
import OneCharacter from '../../containers/personaje/OneCharacter'
import {DynamicGlobalContext} from '../../context/DynamicGlobalProvider'
import swal from 'sweetalert'
import ModalBenchmarkCharacters from '../../containers/modal/BenchmarkCharacters'


const BenchmarkCharacter = () =>{

  const {character1, setCharacter1, character2, setCharacter2, character3, setCharacter3} = React.useContext(DynamicGlobalContext); 

  const [modalShow, setModalShow] = React.useState(false);

  const [inputCharacter, setInputCharacter] = React.useState("");
  const [numberBool, setNumberBool] = React.useState(false);
  const [characterData, setCharacterData] = React.useState("");
  const [showCharacterComponent, setShowCharacterComponent] = React.useState(false);
  const [render, setRender] = React.useState(false);
  const [characterNumber, setCharacterNumber] = React.useState("");

  const [inputCharacter2, setInputCharacter2] = React.useState("");
  const [numberBool2, setNumberBool2] = React.useState(false);
  const [characterData2, setCharacterData2] = React.useState("");
  const [showCharacterComponent2, setShowCharacterComponent2] = React.useState(false);
  const [render2, setRender2] = React.useState(false);
  const [characterNumber2, setCharacterNumber2] = React.useState("");

  const [inputCharacter3, setInputCharacter3] = React.useState("");
  const [numberBool3, setNumberBool3] = React.useState(false);
  const [characterData3, setCharacterData3] = React.useState("");
  const [showCharacterComponent3, setShowCharacterComponent3] = React.useState(false);
  const [render3, setRender3] = React.useState(false);
  const [characterNumber3, setCharacterNumber3] = React.useState("");

  const benchmarkCharacters = () =>{
    if((character1.name && character2.name) || (character1.name && character3.name) || (character2.name && character3.name)){
      setModalShow(true)
    }else{
      missingCharacter();
    }
  }

  const missingCharacter= () =>{
    swal({
        title: "¡Atencion!",
        text: `Deben estar cargados al menos dos personajes antes de hacer el analisis.`,
        icon: "warning",
        buttons: {
            confirm : {text:'Cerrar',className:'msgStyle'} 
        },
    });
  }


  const inputCharacterData = (e) =>{
    e.preventDefault()
    setInputCharacter(e.nativeEvent.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if((Object.is(parseInt(inputCharacter), NaN))){
      setNumberBool(false)
    }else{
      setNumberBool(true)
    }
    setCharacterNumber(1)
    setCharacterData(inputCharacter)
    setShowCharacterComponent(true)
    setInputCharacter("");
    setRender(render ? false: true)
  };


  const inputCharacterData2 = (e) =>{
    e.preventDefault()
    setInputCharacter2(e.nativeEvent.target.value)
  }
  const handleSubmit2 = (e) => {
    e.preventDefault()
    if((Object.is(parseInt(inputCharacter2), NaN))){
      setNumberBool2(false)
    }else{
      setNumberBool2(true)
    }
    setCharacterNumber2(2)
    setCharacterData2(inputCharacter2)
    setShowCharacterComponent2(true)
    setInputCharacter2("");
    setRender2(render2 ? false: true)
  };


  const inputCharacterData3 = (e) =>{
    e.preventDefault()
    setInputCharacter3(e.nativeEvent.target.value)
  }
  const handleSubmit3 = (e) => {
    e.preventDefault()
    if((Object.is(parseInt(inputCharacter3), NaN))){
      setNumberBool3(false)
    }else{
      setNumberBool3(true)
    }
    setCharacterNumber3(3)
    setCharacterData3(inputCharacter3)
    setShowCharacterComponent3(true)
    setInputCharacter3("");
    setRender3(render3 ? false: true)
  };

  

  React.useEffect(()=>{
      //LOGIC: 

      return () =>{
      //Unmount

      }
  }, [])


  return(
    <>
      <Navigation path="/comparativa-de-personajes" text="Comparativa de personajes" class="breadcrumb-item"></Navigation>
      <section className="container Box-section">
        <div className="jumbotron">
          <h3 className="">Consigna:</h3>
          <p className="">Reutilizando la barra de búsqueda del punto anterior, permitir realizar una comparación entre personajes teniendo en cuenta los siguientes campos:
          Nombre; Género; Ubicación; Especie; Estado; Cantidad de episodios que compartieron con cada personaje comparado.
          </p>
          {/* <p className="">Al realizar una búsqueda por episodios, se debe poder ofrecer un mayor nivel de detalle de los episodios por medio de una acción de “+ info”.</p> */}
          <hr className=""/>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="card" style={{minWidth: "10rem"}}>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-title">Personaje 1</h6>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-row d-flex align-items-center">
                        <label style={{marginRight: "10px"}} htmlFor="characterData">Name/Id:</label>
                        <input value={inputCharacter} onChange={inputCharacterData} style={{marginRight: "10px"}} type="text" className="form-control" id="characterData"/>
                        <button onClick={handleSubmit} type="submit" className="btn btn-dark">Go</button>
                      </div>
                    </form>
                    {showCharacterComponent ? <OneCharacter characterNumber={characterNumber}  numero={numberBool} character={characterData} render={render}></OneCharacter> : <></>}
                  </div>
                </div>
                <div className='d-flex justify-content-center'>
                  vs
                </div>
                <div className="card" style={{minWidth: "10rem"}}>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-title">Personaje 2</h6>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-row d-flex align-items-center">
                        <label style={{marginRight: "10px"}} htmlFor="characterData2">Name/Id:</label>
                        <input value={inputCharacter2} onChange={inputCharacterData2} style={{marginRight: "10px"}} type="text" className="form-control" id="characterData2"/>
                        <button onClick={handleSubmit2} type="submit" className="btn btn-dark">Go</button>
                      </div>
                    </form>
                    {showCharacterComponent2 ? <OneCharacter characterNumber={characterNumber2}  numero={numberBool2} character={characterData2} render={render2}></OneCharacter> : <></>}
                  </div>
                </div>
                <div className='d-flex justify-content-center'>
                  vs
                </div>
                <div className="card" style={{minWidth: "10rem"}}>
                  <div className="card-body d-flex justify-content-center">
                    <h6 className="card-title">Personaje 3</h6>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-row d-flex align-items-center">
                        <label style={{marginRight: "10px"}} htmlFor="characterData3">Name/Id:</label>
                        <input value={inputCharacter3} onChange={inputCharacterData3} style={{marginRight: "10px"}} type="text" className="form-control" id="characterData3"/>
                        <button onClick={handleSubmit3} type="submit" className="btn btn-dark">Go</button>
                      </div>
                    </form>
                    {showCharacterComponent3 ? <OneCharacter characterNumber={characterNumber3}  numero={numberBool3} character={characterData3} render={render3}></OneCharacter> : <></>}
                  </div>
                </div>
              </div>
              <div style={{paddingTop: "15px"}} className="col-md-4 d-flex align-items-center justify-content-center">
                <button onClick={benchmarkCharacters} className='btn btn-dark'>Analisis</button>
              </div>
            </div>
          </div>
        </div>  
        <ModalBenchmarkCharacters
                data={1}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
      </section>
    </>
  );
}

export default BenchmarkCharacter;