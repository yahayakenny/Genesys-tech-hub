import React from 'react';
import '../css/main.css';
import NavBar from '../Navigation/NavBar';
import apply from '../images/apply.png';
import book from '../images/book.png';
import Footer from '../LandingPage/Footer'

export const Apply = () => {
    return (
        <div>  
            <NavBar/> 
            <div className="padding">
                <div className = "container">
                    <div className="row">
                        <div className="col-md-7">
                            <h1 className="software-header">Apply Your Knowledge</h1>
                            <br/>
                            <h6 className = "lead"> Before you’re done with Learnable, you will apply everything you’ve learned. You’ll be part of a team made up of 2 designers and 4 developers. You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, from the first pen sketches to the final functioning product. You’ll then get to show off your special project to everyone. </h6> <br></br>                  
                        </div>
                        <div className="col-md-5 text-center" >
                            <br></br><br></br>
                            <img src = {apply} className = "apply" 
                            alt = ""/>     
                        </div>
                    </div>
                    <div className="padding">  
                        <img src = {book} className = "book text-center" alt = ""/>
                    </div>

                    <div style = {{width: "50%", margin: "0 auto"}} >  
                        <h1>How to get in</h1>
                        <h6 className="lead">We are very deliberate with our selection process. We are on a quest to find amazing people who are passionate about learning and growing their careers in the software industry. To this end, we have designed our selection process to help us get such people.</h6><br></br>
                        <h1>Online Application</h1>
                        <h6 className="lead">Introduce yourself to us by filling out our application form. When you’re done filling out the form, proceed to download our prep curriculum that contains everything you need to prepare for the physical and technical assessment.</h6><br></br>
                        <h1>
                       Phone Call Interviews
                        </h1>
                        <h6 className="lead">We will reach out to you to discuss possible opportunities, ascertain where you fit in with us, and answer any questions you might have about the program. It’s supposed to be a chat, getting nervous defeats the aim.</h6><br></br>
                        <h1>Final assessment</h1>
                        <h6 className="lead">At this stage, we’ll get to meet you in person for the first time. You’ll be invited to the hub for a physical assessment that includes a technical assessment, a psychometric test and a face-to-face chat with our team.</h6><br></br>
                        <h1>Get In</h1>
                        <h6 className="lead">If you make it to this stage, you can pack your bags and head down to the beautiful city of Enugu. We will join you on your journey to build that career of your dreams and provide all the help, support and love that we can muster along the way!</h6>
                    </div>
                    <Footer/>





                </div>  
            </div>     
        </div>
    )
}

export default Apply;