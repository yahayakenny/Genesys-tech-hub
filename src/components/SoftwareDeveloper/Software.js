import React from 'react';
import people from '../images/people.png';
import software from '../images/software.png';
import Footer from '../LandingPage/Footer'


export const Software = () => {
    return (
        <div>
            <div className="padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h1 className="software-header">The Learnable Software Developer</h1>
                            <br/>
                            <h6 className = "lead">Creativity means a lot to us. So we look for people who can think both logistically and artistically, and who know that limits are made to be pushed. We value skill and aptitude, but we honor those who care about working with their team to add the Genesys flavour to every project. </h6> <br></br>
                            <h6 className="lead">
                            As a developer, being part of the team exposes you to a range of diverse, like-minded talented people who are sure to make the experience fun for you. You’ll get a shot at building amazing things, developing yourself, learning on the job, while exchanging healthy jokes and having random hangouts once in a while.
                            </h6>
                            <br></br><br></br> 

                            <h1 className = "count-on">“You are someone people can count on. Every day, you come in ready to make great things happen.”</h1>                    
                        </div>
                        <div className="col-md-5 text-center" >
                            <br></br><br></br>
                            <img src = {people} className = "photo" alt = ""/>     
                        </div>
                    </div>

                    <div className="padding">  
                        <img src = {software} className = "software text-center"  alt = ""/>
                    </div>

                    <div className="software-expect"  >  
                        <h1>We expect you to</h1><br></br>
                        <h6>Play nice with other people.</h6><br></br>
                        <h6>Be an actively engaging person. That means you are present, motivated, and social. You know how to communicate effectively with your teammates.</h6><br></br>
                        <h6>Love to code. You understand the basics of programming and object-oriented design and development.</h6><br></br>
                        <h6>
                        Have an eye for detail. Your keen observation helps you catch discrepancies and fix them quickly.
                        </h6><br></br>
                        <h6>Be innately curious. Your love for technology is insatiable, so you’re always researching and experimenting. Learning new technical skills while on the job is something you look forward to.</h6><br></br>
                        <h6>Appreciate good design. You want to make something that doesn't just work flawlessly but looks amazing.</h6><br></br>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Software;