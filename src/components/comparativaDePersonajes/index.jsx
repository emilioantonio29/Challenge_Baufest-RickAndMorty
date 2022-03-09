import React from 'react';
import Navigation from '../Navigation';

const BenchmarkCharacter = () =>{

  React.useEffect(()=>{
      //LOGIC: 

      return () =>{
      //Unmount

      }
  }, [])


  return(
    <>
      <Navigation></Navigation>
      <section className="container">
        <h3 className="">I'm BenchmarkCharacter</h3>
      </section>
    </>
  );
}

export default BenchmarkCharacter;