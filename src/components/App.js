import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Faq from './Faq/Faq';
import Journal from './Journal/Journal';
import ProductDesigner from './ProductDesigner/ProductDesigner';
import SoftwareDeveloper from './SoftwareDeveloper/SoftwareDeveloper';
import Apply from './Apply/Apply';

export const App = () => {
    return (
        <BrowserRouter>
            <div>
                
                <Switch>
                    <Route path="/" component={LandingPage} exact/>
                    <Route path="/software-developer" component={SoftwareDeveloper}/>
                    <Route path="/product-designer" component={ProductDesigner}/>
                    <Route path="/apply" component={Apply}/>
                    <Route path="/journal" component={Journal}/>
                    <Route path="/faq" component={Faq}/>  
                </Switch>
            </div>  
        </BrowserRouter>  
    )
}

export default App;