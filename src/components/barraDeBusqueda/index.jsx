import React from 'react';
import Navigation from '../Navigation';

const SearchBar = () =>{

  React.useEffect(()=>{
      //LOGIC: 

      return () =>{
      //Unmount

      }
  }, [])


  return(
    <>
      <Navigation></Navigation>
      <section className="container ">
        <h3 className="">I'm SearchBar</h3>
      </section>
    </>
  );
}

export default SearchBar;