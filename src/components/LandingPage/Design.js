import React from 'react';
import design from '../images/design.png';
import '../css/main.css';

export const Design = () => {
    return (
        <div className="design-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img src = {design} className = "design" 
                        alt = ""/>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <br></br>
                            <br></br>
                            <h1>Design Different</h1>
                            <br/>
                            <h6 className = "lead">We love to make things work perfectly. That’s why our design learning path exposes you to the science of user-oriented design.</h6> 
                            <br></br>
                            <h6 className = "lead">Design is at the heart of everything we do at Genesys. Right from the start of the program, you’ll get your hands dirty as you get practically involved in the world’s most modern design concepts. At Genesys, we’re building designers who put the users first.</h6>  
                            <br></br>           
                            <br></br>
                        </div>             
                    </div>   
                </div>
            </div>    
        </div>
    )
}

export default Design;