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
                                <h6 className = "lead">Trust us when we say we know how to have fun.</h6><br></br> 
                            </div>   
                        </div>
                        <div className="col-md-6 text-center">
                            <img src = {fun} className = "fun" alt = ""/>
                        </div>  
                    </div>
                </div>
            </div> 
        
            <div className="design-container">
                <div className=" container">
                    <div className="row">
                        <div className="col-md-7 text-center">
                            <img src = {experts} className = "experts" alt = ""/>
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
                            <img src = {classroom} className = "classroom"  alt = ""/>
                        </div>  
                    </div>
                </div>
            </div> 

            <div className="knowledge-container">
                <div className=" container">
                    <div className="row">
                        <div className="col-md-7 text-center">
                            <img src = {culture} className = "culture" alt = ""/>
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

            <div className="container faq padding">
                <h1 style={{fontSize: "100px"}}>FAQ</h1>
                <br></br><br></br>
                <div>
                    <div className= "faq-flex">
                        <h6>How many people can attend a course?</h6>
                        <button class="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo1"><i class="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo1" class="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr>
                <div>
                    <div className= "faq-flex">
                        <h6>What’s the learning experience like?</h6>
                        <button class="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo2"><i class="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo2" class="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr>
                <div>
                    <div className= "faq-flex">
                        <h6>Who are the coaches?</h6>
                        <button class="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo3"><i class="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo3" class="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr>
                <div>
                    <div className= "faq-flex">
                        <h6>How far in advance should we book?</h6>
                        <button class="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo4"><i class="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo4" class="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr>
                <div>
                    <div className= "faq-flex">
                        <h6>Can you customise your courses?</h6>
                        <button class="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo5"><i class="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo5" class="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr> 
            </div>

            <div style={{marginTop: "-20px"}}> 
            <div className= "faq text-center">
                <a data-toggle="collapse" href="#collapseExample"  aria-expanded="false" aria-controls="collapseExample">
                    SEE ALL
                </a>
            </div><br></br>
            <div class="collapse container" id="collapseExample" className = "faq">
                <div>
                    <div className= "faq-flex">
                        <h6>Can you customise your courses?</h6>
                        <button class="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo10"><i class="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo10" class="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr>
                <div > 
                    <div className= "faq-flex">
                        <h6>Can you customise your courses?</h6>
                        <button class="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo11"><i class="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo11" class="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr>
                <div >
                    <div className= "faq-flex">
                        <h6>Can you customise your courses?</h6>
                        <button class="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo12"><i class="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo12" class="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr>
                <div >
                    <div className= "faq-flex">
                        <h6>Can you customise your courses?</h6>
                        <button class="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo13"><i class="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo13" class="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr>
            </div>
            
            </div>
            
        </div>
           
       
    )
}

export default Fun;