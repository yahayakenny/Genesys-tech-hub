import React from 'react';
import '../css/main.css';
import NavBar from '../Navigation/NavBar';
import Footer from '../LandingPage/Footer';
import designer from '../images/designer.png';
import painter from '../images/painter.png'

export const ProductDesigner = () => {
    return (
        <div>
            <NavBar/>
            <div className="padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h1 className="software-header">The Learnable Product Designer</h1>
                            <br/>
                            <h6 className = "lead"> At Genesys, you'll be exposed to every discipline in our creative process – UX, UI, interaction design, and copywriting. You’ll be part of a dynamic team that's made up of like-minded, talented people. You'll work hard with them to create things that will amaze everyone everywhere. </h6> <br></br>
                            <h6 className="lead">
                            In addition to your team projects, you’ll be lending a hand to the creative team. Participating in brainstorm sessions, building winning pitches, preparing assets, and design scriptures for productions, you'll be in the thick of it all.
                            </h6><br></br>
                            <h6 className="lead">Oh, and you’ll make amazing friends while you're at it!</h6>
                            <br></br><br></br> 


                            <h1 className = "count-on" style={{color: '#F5772F'}}>“The greats weren’t great because at birth they could paint. The greats were great because they painted a lot.” <br></br><br></br>
                            - Macklemore
                            </h1>                    
                        </div>
                        <div className="col-md-5 text-center" >
                            <br></br><br></br>
                            <img src = {designer} className = "photo"  alt = ""/>     
                        </div>
                    </div>

                    <div className="padding">  
                        <img src = {painter} className = "painter text-center" alt = ""/>
                    </div>

                    <div className="software-expect" >  
                        <h1>We expect you to</h1><br></br>
                        <h6>Play nice with other people.</h6>
                        <h6>Be an actively engaging person. That means you are present, motivated, and social. You know how to communicate effectively with your teammates.</h6>
                        <h6>Love to code. You understand the basics of programming and object-oriented design and development.</h6>
                        <h6>
                        Have an eye for detail. Your keen observation helps you catch discrepancies and fix them quickly.
                        </h6>
                        <h6>Be innately curious. Your love for technology is insatiable, so you’re always researching and experimenting. Learning new technical skills while on the job is something you look forward to.</h6>
                        <h6>Appreciate good design. You want to make something that doesn't just work flawlessly but looks amazing.</h6>
                    </div>
                    <Footer/>
                </div>
            </div>

        </div>
    )
}
export default ProductDesigner;