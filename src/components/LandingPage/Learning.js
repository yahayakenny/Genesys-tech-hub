import React from 'react';
import learning from '../images/learning.png';
import '../css/main.css';

export const Learning = () => {
    return (
        <div className="design-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <img src = {learning} className = "learning " />
                    </div>        
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                        <br></br><br></br>
                        <h1>An unusual Learning experience</h1>
                        <br/>
                        <h6 className = "lead">At Genesys, we believe in the learning processes as much as we believe in the results. By applying a combination of active and social learning methodologies, we create an environment that involves the learner in the learning process while providing avenues for collaboration and peer-to-peer mentorship.</h6> 
                        <br></br>
                        <h6 className = "lead">Our methods over the years have helped us discover ways to take education out of the classroom. We introduce our interns to learning by experimentation and problem-solving. To us, every task is an opportunity to learn. </h6>  
                        <br></br>           
                        <br></br> 
                        </div>          
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Learning