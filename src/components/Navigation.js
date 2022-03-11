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
                        <li className="breadcrumb-item breadcrumb-item-hover">
                            <NavLink to={'/'} style={{textDecoration: 'none', color: "black"}}>
                                Home
                            </NavLink>
                        </li>
                        <li className={props.class}>
                            <NavLink disabled to={props.path ? props.path : '/'} style={{textDecoration: 'none', color: "black"}}>
                                {props.text}
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink disabled to={'/'}  className="" style={{textDecoration: 'none', color: "black"}}>
                                
                            </NavLink>
                        </li>
                    </ol>
                </nav>
            </div>
        </>
    );
}

export default Navigation;