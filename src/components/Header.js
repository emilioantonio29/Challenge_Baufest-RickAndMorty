import logo from '../assets/logo.png';
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    
    <header className="">
      {/* <NavLink to={'/'}><img src={logo} className="App-logo" alt="logo" /></NavLink>
      <h2>¡Bienvenido al Challenge de React!</h2> */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          {/* <span className="navbar-text">
              Navbar text with an inline element
          </span> */}
          <img src={logo} style={{marginRight: "5%"}} alt="" width="140px"  className="d-inline-block align-text-top"/>

          <div className="" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={'/busqueda-por-episodio'} activeclassname="active" className="nav-link Color-header">
                  Busqueda por episodio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/busqueda-por-personaje'} activeclassname="active" className="nav-link Color-header">
                  Busqueda por personaje
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/busqueda-por-ubicacion'} activeclassname="active" className="nav-link Color-header">
                  Busqueda por ubicacion
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/comparativa-de-personajes'} activeclassname="active" className="nav-link Color-header">
                  Comparativa de personajes
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to={'/detalle-de-episodios'} activeclassname="active" className="nav-link Color-header">
                  Detalle de episodios
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

    </header>
  );
}

export default Header;
