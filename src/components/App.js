import React from 'react';
import { Hero } from './Hero';
import NavBar from './NavBar';
import People from './People';
import Learning from './Learning';
import Curriculum from './Curriculum';
import Design from './Design';
import { Eligible } from './Eligible';
import { Culture } from './Culture';
import Fun from './Fun';


export const App = () => {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <People/>
            <Learning/>
            <Curriculum/>
            <Design/>
            <Eligible/>
            <Culture/>
            <Fun/>
        </div>
    )
}

export default App;