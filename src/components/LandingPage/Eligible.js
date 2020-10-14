import React from 'react'
import eligible from '../images/eligible.png';
import '../css/main.css';

export const Eligible = () => {
    return (
        <div className = "padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6  d-flex align-items-center">
                        <div>
                            <h1>Who is Eligible?</h1>
                            <br></br>
                            <h6 className = "lead">
                            To be a participant of lernable, you need to be a young and passionate person interested in launching a super tech career. You will need to have foundational knowledge in whatever learning path you are applying for and be available for the six month duration of the program.
                            </h6>
                            <h6 className = "lead">
                            To become a part of the Genesys family, you must express some of the qualities we consider important. You are someone that takes responsibilities and initiatives. You will also express the ability to produce quality stuff in good time with high consistency. 
                            </h6>
                            <br></br>
                        </div>   
                    </div>
                    
                    <div className="col-md-6 text-center">
                        <img src = {eligible} className = "eligible" />
                    </div>
                </div>
            </div> 
        </div>
    )
}
