import React from 'react';
import Episode from '../../containers/episodio/index';
import Navigation from '../Navigation';
import {DynamicGlobalContext} from '../../context/DynamicGlobalProvider'

const SearchEpisode = () =>{

  const {test} = React.useContext(DynamicGlobalContext); 

  const [inputValue, setInputValue] = React.useState("");
  const [episodeId, setEpisodeId] = React.useState("");
  const [showEpisodeComponent, setShowEpisodeComponent] = React.useState(false);

  const inputEpisodeId = (e) =>{
    e.preventDefault()
    setInputValue(e.nativeEvent.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEpisodeId(inputValue)
    setShowEpisodeComponent(true)
    setInputValue("");
  };

  React.useEffect(()=>{
      //LOGIC: 

      return () =>{
      //Unmount

      }
  }, [])

  return(
    <>
      <Navigation path="/busqueda-por-episodio" text="Busqueda por episodio" class="breadcrumb-item"></Navigation>
      <section className="container Box-section">
        <div className="jumbotron">
          <h3 className="">Consigna:</h3>
          <p className="">Mostrar: Nombre, Fecha de emisión, Código de episodio.</p>
          <p className="">Al realizar una búsqueda por episodios, se debe poder ofrecer un mayor nivel de detalle de los episodios por medio de una acción de “+ info”.</p>
          <hr className=""/>
        </div>
        <form>
          <div className="form-row d-flex align-items-center">
            <label style={{marginRight: "10px"}} htmlFor="episodioId">Introduce un numero de episodio:</label>
            <input value={inputValue} onChange={inputEpisodeId} style={{marginRight: "10px"}} type="number" className="form-control" id="episodioId"/>
            <button onClick={handleSubmit} type="submit" className="btn btn-dark">Consultar</button>
          </div>
         </form>
      </section>
      <section className="container">
        {showEpisodeComponent ? <Episode episode={episodeId}></Episode> : <></>}
      </section>
    </>
  );
}

export default SearchEpisode;