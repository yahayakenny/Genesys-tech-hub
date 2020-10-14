import React from 'react'
import '../css/main.css';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';


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
                                <a className="nav-link" href="#" style ={{color: "#F5772F"}} >LEARNABLE <span className="sr-only">(current)</span></a>
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
                                <a className="btn btn-outline-danger"  href="#" role="button">DEVSTUDIO</a>  
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
                                        <NavLink to="/" className= "nav-link">HOME</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/software-developer"  className= "nav-link">SOFTWARE DEVELOPER</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/product-designer"  className= "nav-link">PRODUCT DESIGNER</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/apply"  className= "nav-link">APPLY</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/journal"  className= "nav-link">JOURNAL</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/faq"  className= "nav-link">FAQ</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default NavBar