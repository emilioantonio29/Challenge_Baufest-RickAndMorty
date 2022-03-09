import React from 'react';
import Navigation from '../Navigation';

const EpisodeDetail = () =>{

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
        <h3 className="">I'm EpisodeDetail</h3>
      </section>
    </>
  );
}

export default EpisodeDetail;