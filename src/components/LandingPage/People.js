import React from 'react';
import people from '../images/people.png';
import '../css/main.css';

export const People = () => {
    return (
        <div className="padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>We make people great</h1>
                        <br/>
                        <h6 className = "lead">As part of our calculated efforts to contribute to the emerging knowledge and skills driven economy of Nigeria, Learnable is a 6-month product development training program with an emphasis on software programming and product design. It is for outstanding young individuals who are passionate about building a career in the software industry.</h6> 
                        <br></br>
                        <h6 className = "lead">We primarily educate and groom software developers and designers, preparing them for the industry.</h6>  
                        <br></br><br></br>                     
                    </div>
                    <div className="col-md-6 text-center">
                        <img src = {people} className = "photo" alt = "" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default People;