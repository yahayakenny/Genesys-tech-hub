import React from 'react';
import '../css/main.css';
import NavBar from '../Navigation/NavBar';
import HomeJournal from '../LandingPage/HomeJournal'
import Footer from '../LandingPage/Footer';
import book from '../images/book.png';

export const Journal = () => {
    return (
        <div>
           <NavBar/>
            <div className="padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src = {book} style={{width: "100%"}}
                            alt = ""/>  
                        </div>
                        <div className="col-md-6">
                            <br></br>
                            <h1 style={{fontSize: "40px", fontWeight: "500", color:"#17255A"}}>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
                            <br></br>
                            <h6 class = "lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sapien arcu vitae orci at molestie. Pharetra quisque donec accumsan rhoncus risus. Urna magna turpis duis imperdiet elit, et, hendrerit viverra risus. Vulputate euismod commodo donec tincidunt et, aliquam. Eget scelerisque netus habitant dui porttitor cursus. Ipsum sem ut tortor ac ullamcorper. Lacus.</h6>
                        </div>
                    </div>

                </div>
                
            </div>
           <HomeJournal/>
           <HomeJournal/>
           <Footer/>
        </div>
    )
}
export default Journal;