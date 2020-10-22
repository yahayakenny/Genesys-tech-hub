import React from 'react';
import curriculum from '../images/curriculum.png'

export const Curriculum = () => {
    return (
        <div className="padding">
            <div className="container">
                <br></br><br></br>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h1>Learn to build software the right way</h1>
                            <br/>
                            <h6 className = "lead">We love to build stuff. Really awesome stuff. That’s why we have developed a learning program that will empower you to create amazing software the right way.</h6> 
                            <br></br>
                            <h6 className = "lead">We believe in learning through experimentation. Our aim is to nurture and grow bright young minds from the get-go because that’s how our industry will thrive.. </h6>  
                            <br></br>           
                            <br></br>
                        </div>             
                    </div>
                    <div className="col-md-6 text-center">
                        <img src = {curriculum} className = "curriculum " alt = ""/>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Curriculum;