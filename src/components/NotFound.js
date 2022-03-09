import React from 'react';
import Navigation from './Navigation';

const NotFound = () =>{

  React.useEffect(()=>{
      //LOGIC: 

      return () =>{
      //Unmount

      }
  }, [])


  return(
    <>
      <Navigation text="Not Found" class="breadcrumb-item"></Navigation>
      <section className="container">
        <h3 className="">NOT FOUND</h3>
      </section>
    </>
  );
}

export default NotFound;