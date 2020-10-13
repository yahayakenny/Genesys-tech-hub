import React from 'react'
import '../css/main.css';
import logo from '../images/logo.png'

export const NavBar = () => {
    return (
        <div>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light upper-nav">
                    <a className="navbar-brand" href="#"><img src = {logo} className="logo"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            
                            <li className="nav-item active">
                                <a className="nav-link" href="#">LEARNABLE <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">AGORA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">STARTZONE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">build a product with</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-dark"  href="#" role="button">DEVSTUDIO</a>  
                            </li>
                        </ul>
                    </div>
                </nav>  
            </div>

            <div className = "lower-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-sm navbar-dark ">
                        <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
                            <div className="collapse navbar-collapse text-center" id="navbarsExample11">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">SOFTWARE DEVELOPERS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">PRODUCT DESIGNERS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">APPLY</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">JOURNAL</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">FAQ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            
            <div className="third-nav">
                <br></br>
                <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h4>Coming soon: Learnable ‘20</h4>
                        <br/>
                        <h6 className = "lead" style = {{width: '80%'}}>We've started taking in applications for the next batch of learnable interns. Applications are on till the 21st of Febuary</h6>
                    </div>
                    <div className="col-md-4">
                        <h6>Click link to download...</h6>
                        <br/>
                        <a className="" href="#"><h4>Learnable ‘20 Brochure</h4></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar