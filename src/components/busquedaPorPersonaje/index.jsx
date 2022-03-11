import React from 'react';
import Navigation from '../Navigation';
import Character from '../../containers/personaje/index'

const SearchCharacter = () =>{

  const [inputCharacter, setInputCharacter] = React.useState("");
  const [numberBool, setNumberBool] = React.useState(false);
  const [characterData, setCharacterData] = React.useState("");
  const [showCharacterComponent, setShowCharacterComponent] = React.useState(false);
  const [render, setRender] = React.useState(false);

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

    setCharacterData(inputCharacter)
    setShowCharacterComponent(true)
    setInputCharacter("");
    setRender(render ? false: true)
  };

  React.useEffect(()=>{
      //LOGIC: 

      return () =>{
      //Unmount

      }
  }, [])


  return(
    <>
      <Navigation path="/busqueda-por-personaje" text="Busqueda por personaje" class="breadcrumb-item"></Navigation>
      <section className="container Box-section">
        {/* <button onClick={()=>{console.log(inputValue)}}>test</button> */}
        <div className="jumbotron">
          <h3 className="">Consigna:</h3>
          <p className="">Mostrar: Nombre, Género, Ubicación, Un episodio en el que haya aparecido (debe variar cada vez que se muestra el personaje), Foto</p>
          {/* <p className="">Al realizar una búsqueda por episodios, se debe poder ofrecer un mayor nivel de detalle de los episodios por medio de una acción de “+ info”.</p> */}
          <hr className=""/>
        </div>
        <form>
          <div className="form-row d-flex align-items-center">
            <label style={{marginRight: "10px"}} htmlFor="characterData">Introduce un nombre o un id de personaje:</label>
            <input value={inputCharacter} onChange={inputCharacterData} style={{marginRight: "10px"}} type="text" className="form-control" id="characterData"/>
            <button onClick={handleSubmit} type="submit" className="btn btn-dark">Consultar</button>
          </div>
         </form>
      </section>
      <section className="container">
        {showCharacterComponent ? <Character numero={numberBool} character={characterData} render={render}></Character> : <></>}
      </section>
    </>
  );
}

export default SearchCharacter;