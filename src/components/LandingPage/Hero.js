import React from 'react';
import '../css/main.css';
import video from '../images/Video.png';
import product from '../images/product.png';
import dev from '../images/dev.png';

export const Hero = () => {
    return (
        <div>   
            <div>
                <div className="third-nav">
                    <br></br>
                    <div className= "container">
                        <div className="row">
                            <div className="col-md-8">
                                <h4>Coming soon: Learnable ‘20</h4>
                                <br/>
                                <h6 className = "lead" style = {{width: '80%'}}>We've started taking in applications for the next batch of learnable interns. Applications are on till the 21st of Febuary</h6>
                            </div>
                            <div className="col-md-4">
                                <a href = "#demo">Click link to download...</a>
                                <br></br><br></br>
                                <a className="" href="#demo"><h4>Learnable ‘20 Brochure</h4></a>
                            </div>
                        </div>
                    </div>   
                </div>

                <div className = "container">
                    <div className="row ">
                        <div className="col-md-6 hero">
                            <br></br>
                            <h1>Everything is Learnable</h1>
                            <h6 className= "lead">Learnable is the perfect product development internship program brought to you by Genesys.</h6>
                        </div>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/>

                    <div className="product-images">
                        <img src = {video} alt = "" className = "video" />
                        <br/><br/><br/>
                        <div className="product">
                            <img src = {product} className = "product" alt = ""/>
                            <img src = {dev} className = "dev" alt = ""/>
                        </div>
                    </div>  
                </div>      
            </div>
        </div>
    )
}
