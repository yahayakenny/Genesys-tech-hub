import React from 'react';
import { Hero } from './Hero';
import People from './People';
import Learning from './Learning';
import Curriculum from './Curriculum';
import Design from './Design';
import { Eligible } from './Eligible';
import { Culture } from './Culture';
import Fun from './Fun';
import NavBar from '../Navigation/NavBar'
import HomeJournal from './HomeJournal';
import Footer from './Footer';
import {Logos } from './Logos'

export const LandingPage = () => {
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
            <HomeJournal/>
            <Logos/>
            <Footer/>
        </div>
    )
}

export default LandingPage;