import React from 'react';
import {NavLink} from 'react-router-dom'

const Navigation = (props) =>{

  React.useEffect(()=>{
      //LOGIC: 

      return () =>{
      //Unmount

      }
  }, [])


  return(
    <>
        <div className='container Navigation'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb Margin-zero">
                    <li className="breadcrumb-item">
                        <NavLink to={'/'}  className="">
                            Home
                        </NavLink>
                    </li>
                    <li className={props.class} aria-current="page">{props.text}</li>
                </ol>
            </nav>
        </div>
    </>
  );
}

export default Navigation;