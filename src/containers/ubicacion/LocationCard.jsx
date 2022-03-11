import React from 'react';

const CardLocation = (props) =>{

    const [date, setDate] = React.useState("");
    const [day, setDay] = React.useState("");

    React.useEffect(()=>{
        //LOGIC: 
        let date = props.location.created.split('-')
        let day = date[2].split('T')
        setDate(date)
        setDay(day)
        return () =>{
        //Unmount

        }
    }, [])


    return(
        <>

            <div className="card Episodes-card" style={{width: "18rem"}}>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div className="card-body">
                    <div className='d-flex justify-content-center'>                        
                        <h5 className="card-title">Ubicacion</h5>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                    </div>
                    <p className="card-text"><strong>Nombre:</strong> {props.location.name}</p>
                    <p className="card-text"><strong>Tipo:</strong> {props.location.type}</p>
                    <p className="card-text"><strong>Dimensión:</strong> {props.location.dimension}</p>
                    <p className="card-text"><strong>Cantidad de residentes:</strong> {props.location.residents.length}</p>
                    <p className="card-text"><strong>Fecha de creación:</strong> {day[0]}/{date[1]}/{date[0]}</p>
                </div>
            </div>
        </>
    );
}

export default CardLocation;