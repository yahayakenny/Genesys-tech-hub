import React from 'react'
import fun from '../images/fun.png';
import experts from '../images/experts.png';
import classroom from '../images/classroom.png';
import culture from '../images/culture.png';
import '../css/main.css';

export const Fun = () => {
    return (
        <div>
            <div className = "padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6  d-flex align-items-center">
                            <div>
                                <h1>Learning can be fun</h1>
                                <br></br>
                                <h6 className = "lead"> We believe learning should be a fun experience. For this reason, we don’t do all the learning in the classroom.</h6>
                                <h6 className = "lead">The Learnable experience can not be complete without the bag of fun times which you’ll have. To us, every task is an opportunity to have some fun. But we do well to throw in a good number of activities to add to this. You will find yourself partaking in a lot of healthy activities such as cooking, sports, music, hangouts, and even random dates.</h6>
                                <h6 className = "lead">Trust us when we say we know how to have fun.</h6>   
                            </div>   
                        </div>
                        <div className="col-md-6 text-center">
                            <img src = {fun} className = "fun" />
                        </div>  
                    </div>
                </div>
            </div> 
        
            <div className="design-container">
                <div className=" container">
                    <div className="row">
                        <div className="col-md-7 text-center">
                            <img src = {experts} className = "experts" />
                        </div>  
                        <div className="col-md-5  d-flex align-items-center">
                            <div>
                                <br></br>
                                <h1>Learn from the experts</h1>
                                <br></br>
                                <h6 className = "lead"> As a learnable intern, you will be learning from the best software developers and product designers our industry has to offer. You will spend the first 3 months in the classroom with industry experts who have a wealth of experience from developing amazing products for various customers in our industry.</h6>  
                            </div>   
                        </div> 
                    </div>  
                </div>
            </div>

            <div className = "padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6  d-flex align-items-center">
                            <div>
                                <h1>Learning doesn’t always have to be in the classroom.</h1>
                                <br></br>
                                <h6 className = "lead"> We have designed other learning activities that aren’t classroom-based. You will learn how to be a better person, how to have good conversations, how to work better with people and most importantly, how to lead other people. Hey! We’ll even teach you how to run a business during the Learnable Business Sessions.</h6>
                            </div>   
                        </div>
                        <div className="col-md-6 text-center">
                            <br></br>
                            <img src = {classroom} className = "classroom" />
                        </div>  
                    </div>
                </div>
            </div> 

            <div className="knowledge-container">
                <div className=" container">
                    <div className="row">
                        <div className="col-md-7 text-center">
                            <img src = {culture} className = "culture" />
                        </div>  
                        <div className="col-md-5  d-flex align-items-center">
                            <div>
                                <br></br>
                                <h1>Apply your knowledge</h1>
                                <br></br>
                                <h6 className = "lead"> Before you’re done with Learnable, you will apply everything you’ve learned. You’ll be part of a team made up of 2 designers and 4 developers. You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, from the first pen sketches to the final functioning product. You’ll then get to show off your special project to everyone.</h6>  
                            </div>   
                        </div> 
                    </div>  
                </div>
            </div>





        </div>
           
       
    )
}

export default Fun;