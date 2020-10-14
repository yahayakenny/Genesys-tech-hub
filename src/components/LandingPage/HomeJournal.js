import React from 'react';
import '../css/main.css';
import journal1 from '../images/journal1.png';
import journal2 from '../images/journal2.png';
import journal3 from '../images/journal3.png';
import journal4 from '../images/journal4.png';
import footer1 from '../images/footer1.png';
import footer2 from '../images/footer2.png';
import footer3 from '../images/footer3.png';
import footer4 from '../images/footer4.png';
import footer5 from '../images/footer5.png';
import footer6 from '../images/footer6.png';

export const HomeJournal = () => {
    return (
        <div className = "design-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 col-sm-6">
                        <img src = {journal1} className="journal"/>  
                        <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                        <br></br> 
                        <h6 className="lead">David Mong, Apr 9, 2020</h6>
                        <br></br>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-6">
                        <img src = {journal2} className="journal"/> 
                        <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4> 
                        <br></br>
                        <h6 className="lead">David Mong, Apr 9, 2020</h6>
                        <br></br>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-6">
                        <img src = {journal3} className="journal"/> 
                        <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4> 
                        <br></br>
                        <h6 className="lead">David Mong, Apr 9, 2020</h6>
                        <br></br>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-6">
                        <img src = {journal4} className="journal"/>
                        <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>  
                        <br></br>
                        <h6 className="lead">David Mong, Apr 9, 2020</h6>
                        <br></br>
                    </div>
                </div>
                <br></br><br></br><br></br>
                <div className="row">
                    <div className="col">
                        <img src = {footer6} className = "footer"/>
                    </div>
                    <div className="col">
                        <img src = {footer1} className = "footer"/>
                    </div>
                    <div className="col">
                        <img src = {footer2} className = "footer"/>
                    </div>
                    <div className="col">
                        <img src = {footer3} className = "footer"/>
                    </div>
                    <div className="col">
                        <img src = {footer4} className = "footer"/>
                    </div>
                    <div className="col">
                        <img src = {footer5} className = "footer"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeJournal;