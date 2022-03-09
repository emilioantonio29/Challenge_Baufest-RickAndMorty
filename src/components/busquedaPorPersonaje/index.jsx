import React from 'react';
import Navigation from '../Navigation';

const SearchCharacter = () =>{

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
        <h3 className="">I'm SearchCharacter</h3>
      </section>
    </>
  );
}

export default SearchCharacter;