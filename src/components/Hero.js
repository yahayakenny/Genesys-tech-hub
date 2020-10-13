import React from 'react';
import '../css/main.css';
import video from '../images/Video.png';
import product from '../images/product.png';
import dev from '../images/dev.png';

export const Hero = () => {
    return (
        <div>
            <br/><br/><br/>
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 hero">
                        <h1>Everything is Learnable</h1>
                        <h6 className= "lead">Learnable is the perfect product development internship program brought to you by Genesys.</h6>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/>

                <div className="product-images">
                    <img src = {video} alt = "" className = "video" />
                    <br/><br/><br/>
                    <div className="product">
                        <img src = {product} className = "product"/>
                        <img src = {dev} className = "dev"/>
                    </div>
                </div>   
            </div>
        </div>
    )
}
