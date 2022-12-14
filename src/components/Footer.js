import React from 'react';
import {NavLink} from 'react-router-dom'

const Footer = () =>{

  React.useEffect(()=>{
      //LOGIC: 
      return () =>{
      //Unmount

      }
  }, [])


  return(
    <>
        <div className=' Min-height-footer Footer-general d-flex align-items-center'>
            <div className='container d-flex justify-content-center align-items-center'>
                <p style={{marginBottom: "0px"}}>© 2022 | Powered by <strong><a href="https://www.linkedin.com/company/baufest/?originalSubdomain=ar" target="_blank">Baufest</a></strong> & <strong><a href="https://www.linkedin.com/in/emilio-martinez-gonzalez-0b0195165/" target="_blank">Emilio Martinez</a></strong>
                </p>
            </div>
        </div>
    </>
  );
}

export default Footer;