import React from 'react';
import culture from '../images/culture.png';
import '../css/main.css';

export const Culture = () => {
    return (
        <div className = "padding culture-container">
            <div class="container">
                <div class="row">
                    <div className="col-md-6 text-center">
                        <img src = {culture} className = "culture" />
                    </div>
                    <div class="col-md-6  d-flex align-items-center">
                        <div>
                            <br></br>
                            <h1>Our Culture</h1>
                            <br></br>
                            <h6 className = "lead">
                            Our culture are the unspoken things that make us who we are at Genesys. To become one of us, you need to be like the rest of us. We believe that excellence is a culture, and we are committed to a philosophy of consistent improvement in everything we do. We are passionate, candid and we trust in the power of collaboration.
                            </h6>
                            
                        </div>   
                    </div>  
                </div>
            </div> 
        </div>
    )
}

export default Culture
