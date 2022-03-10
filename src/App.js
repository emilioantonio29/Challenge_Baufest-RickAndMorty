import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './components/NotFound';
import SearchBar from './components/barraDeBusqueda/index'
import SearchEpisode from './components/busquedaPorEpisodio/index'
import SearchCharacter from './components/busquedaPorPersonaje/index'
import SearchLocation from './components/busquedaPorUbicacion/index'
import BenchmarkCharacter from './components/comparativaDePersonajes/index'
import EpisodeDetail from './components/detalleDeEpisodios/index'
import Footer from './components/Footer'
import {DynamicGlobalProvider} from './context/DynamicGlobalProvider'


function App() {
  return (
    <>
    <DynamicGlobalProvider>
      <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='*' exact={true} element={<NotFound/>} />
            <Route path="/barra-de-busqueda" element={<SearchBar/>}/>
            <Route path="/busqueda-por-episodio" element={<SearchEpisode/>}/>
            <Route path="/busqueda-por-personaje" element={<SearchCharacter/>}/>
            <Route path="/busqueda-por-ubicacion" element={<SearchLocation/>}/>
            <Route path="/comparativa-de-personajes" element={<BenchmarkCharacter/>}/>
            {/* <Route path="/detalle-de-episodios" element={<EpisodeDetail/>}/> */}
          </Routes>
        <Footer></Footer>
      </BrowserRouter>    
    </DynamicGlobalProvider>
    
    </>
  );
}

export default App;
