import React from 'react';
import '../css/main.css';
import NavBar from '../Navigation/NavBar';
import Footer from '../LandingPage/Footer';
import faq from '../images/faq.png'

export const Faq = () => {
    return (
        <div>
            <NavBar/>
            <br></br><br></br><br></br><br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center text-center">
                        <h1 style={{fontSize: "150px"}}>FAQ</h1>
                        
                    </div>
                    <div className="col-md-6 text-center">
                        <img src = {faq} style={{width: "100%"}} alt = "" />
                    </div>
                
                </div>
            </div>
            <br></br><br></br><br></br><br></br>
            <div className="container faq">
                <div>
                    <div className= "faq-flex">
                        <h6>How many people can attend a course?</h6>
                        <button className="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo1"><i className="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo1" className="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr>
                <div>
                    <div className= "faq-flex">
                        <h6>What’s the learning experience like?</h6>
                        <button className="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo2"><i className="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo2" className="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr>
                <div>
                    <div className= "faq-flex">
                        <h6>Who are the coaches?</h6>
                        <button className="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo3"><i className="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo3" className="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr>
                <div>
                    <div className= "faq-flex">
                        <h6>How far in advance should we book?</h6>
                        <button className="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo4"><i className="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo4" className="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr>
                <div>
                    <div className= "faq-flex">
                        <h6>Can you customise your courses?</h6>
                        <button className="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo5"><i className="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo5" className="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr>
                <div>
                    <div className= "faq-flex">
                        <h6>Can you customise your courses?</h6>
                        <button className="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo6"><i className="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo6" className="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr>
                <div>
                    <div className= "faq-flex">
                        <h6>Can you customise your courses?</h6>
                        <button className="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo7"><i className="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo7" className="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr>
                <div>
                    <div className= "faq-flex">
                        <h6>Can you customise your courses?</h6>
                        <button className="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo8"><i className="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo8" className="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div><hr></hr>
                <div>
                    <div className= "faq-flex">
                        <h6>Can you customise your courses?</h6>
                        <button className="btn" data-toggle="collapse" style = {{marginTop: "-8px"}}data-target="#demo9"><i className="fas fa-chevron-down"></i></button>
                    </div>
                    <div id="demo9" className="collapse">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error perspiciatis, modi doloremque nisi, at doloribus molestias facilis debitis sunt ad cupiditate ut rem quas. Molestias ducimus itaque harum asperiores?
                    </div>
                </div> <hr></hr>   
            </div>
            <Footer/>
        </div>
       
    )
}

export default Faq;