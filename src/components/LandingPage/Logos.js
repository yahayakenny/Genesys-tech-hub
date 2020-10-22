import React from 'react';
import footer1 from '../images/footer1.png';
import footer2 from '../images/footer2.png';
import footer3 from '../images/footer3.png';
import footer4 from '../images/footer4.png';
import footer5 from '../images/footer5.png';
import footer6 from '../images/footer6.png';

export const Logos = () => {
    return (
        <div className = "container padding">
            <div className="row">
                    <div className="col">
                        <img src = {footer6} className = "footer" alt = ""/>
                    </div>
                    <div className="col">
                        <img src = {footer1} className = "footer" alt = ""/>
                    </div>
                    <div className="col">
                        <img src = {footer2} className = "footer" alt = ""/>
                    </div>
                    <div className="col">
                        <img src = {footer3} className = "footer" alt = ""/>
                    </div>
                    <div className="col">
                        <img src = {footer4} className = "footer" alt = ""/>
                    </div>
                    <div className="col">
                        <img src = {footer5} className = "footer" alt = ""/>
                    </div>
                </div>
        </div>
    )
}
