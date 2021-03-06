import React from 'react';
import '../css/main.css';

import footer7 from '../images/footer7.png';

export const Footer = () => {
    return (
        <div className = "padding-footer">
            <div className="container">
                <div className="container footer-container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Stay up to date on what we are doing and new learning opportunities</h1>
                            <br></br>  
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                            <div>
                                <input type="email" className="form-control input"  placeholder="YOUR EMAIL"/>
                                <br></br><br></br>
                                <h6>View Privacy Policy</h6>
                                <br></br>
                            </div>   
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                            <div>
                                <button type="button" className="btn btn-outline-danger">SUBSCRIBE</button>
                            </div>
                            <br></br>
                        </div>
                    </div>
                </div>

                <div className="container padding-footer">
                    <div className="row">
                        <div className="col-md-2 d-flex align-items-center">
                            <div>
                                <h6>BUILD SOFTWARE</h6>
                                <h6>DESIGN DIFFERENT</h6>
                                <h6>APPLY YOUR KNOWLEDGE</h6>
                                <h6>FAQ</h6>
                            </div>   
                        </div>
                        <div className="col-md-4 d-flex align-items-center">
                            <div>
                                <br></br>
                                <h6>Our Local Campus center: Kilometer 7, Enugu/Port Harcourt, Expressway, Centenary City, Enugu. Nigeria</h6>
                                <h6><a href = "#demo">GET IN TOUCH</a></h6>
                                <br></br>
                            </div>   
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                        <br></br>
                            <img src = {footer7} className = "footer" style = {{width: '70%'}} alt = ""/>
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                            <div>
                                <br></br>
                                <h6>Learnable is proud to be a collaborative effort of all the arms of our product team</h6>
                                <br></br>
                                <h6><a href = "demo">HEAD TO DEVSTUDIO</a></h6>
                            </div>   
                        </div>
                    </div>
                </div> 


                <div className = "footer-icons">
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-vimeo-v"></i>
                </div>   
                <div className = "copyright">
                    <h6> &copy;GENESYS 2020  PRIVACY STATEMENT</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer