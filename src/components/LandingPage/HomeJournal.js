import React from 'react';
import '../css/main.css';
import journal1 from '../images/journal1.png';
import journal2 from '../images/journal2.png';
import journal3 from '../images/journal3.png';
import journal4 from '../images/journal4.png';


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
            </div>
        </div>
    )
}

export default HomeJournal;