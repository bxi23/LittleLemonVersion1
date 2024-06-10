import React from 'react';

import restaurant from '../Assets/restaurant.jpg';
import ReserveTable from '../ReserveTable';
import Footer from '../Footer';

const imgSection = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#495E57',
    padding:'50px',
}
const imgStyle = {
    width:'100%',
    objectFit:'cover',
    height:'100%',
    width:'60%',
    maxHeight:'300px',
    maxWidth:'600px',
    border:'2px solid black',
    borderRadius:'15px',

}
const Reservations = () => {
    return (
        <React.Fragment>
            <div className='Image' style={imgSection}>
                <h1>Reservations</h1>
                <img src={restaurant} alt='restaurant' style={imgStyle}></img>
            </div>
            <ReserveTable/>
            <Footer/>
        </React.Fragment>
    )
}

export default Reservations;