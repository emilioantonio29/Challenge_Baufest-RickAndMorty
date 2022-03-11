import React from 'react';
import Navigation from '../Navigation';
import Location from '../../containers/ubicacion/index'

const SearchLocation = () =>{

  const [inputLocation, setInputLocation] = React.useState("");
  const [numberBool, setNumberBool] = React.useState(false);
  const [locationData, setLocationData] = React.useState("");
  const [showLocationComponent, setShowLocationComponent] = React.useState(false);
  const [render, setRender] = React.useState(false);

  const inputCharacterData = (e) =>{
    e.preventDefault()
    setInputLocation(e.nativeEvent.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if((Object.is(parseInt(inputLocation), NaN))){
      setNumberBool(false)
    }else{
      setNumberBool(true)
    }

    setLocationData(inputLocation)
    setShowLocationComponent(true)
    setInputLocation("");
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
      <Navigation path="/busqueda-por-ubicacion" text="Busqueda por ubicacion" class="breadcrumb-item"></Navigation>
      <section className="container Box-section">
        {/* <button onClick={()=>{console.log(inputValue)}}>test</button> */}
        <div className="jumbotron">
          <h3 className="">Consigna:</h3>
          <p className="">Mostrar: Nombre, Tipo, Dimensión, Cantidad de residentes, Fecha de creación</p>
          <hr className=""/>
        </div>
        <form>
          <div className="form-row d-flex align-items-center">
            <label style={{marginRight: "10px"}} htmlFor="locationData">Introduce un nombre o un id de ubicacion:</label>
            <input value={inputLocation} onChange={inputCharacterData} style={{marginRight: "10px"}} type="text" className="form-control" id="locationData"/>
            <button onClick={handleSubmit} type="submit" className="btn btn-dark">Consultar</button>
          </div>
         </form>
      </section>
      <section className="container">
        {showLocationComponent ? <Location numero={numberBool} location={locationData} render={render}></Location> : <></>}
      </section>
    </>
  );
}

export default SearchLocation;