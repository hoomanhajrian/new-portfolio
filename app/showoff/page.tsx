"use client";
import React from 'react';
import Graph from '../components/showoffComponents/Graph';
import Bump from '../components/showoffComponents/Bump';
import RadarController from '../components/showoffComponents/RadarController';
import DogApi from '../components/showoffComponents/DogApi';
import BarChart from '../components/showoffComponents/BarChart';
// import MouseMagic from '../components/showoffComponents/mouseMagic';
import Calculator from '../components/showoffComponents/Calculator';
// import MusicPlayer from '../components/showoffComponents/MusicPlayer';
import Test from '../components/showoffComponents/Test';
import GameContainer from '../components/showoffComponents/GameContainer';
// import Map from '../components/showoffComponents/Map';
import Todo from '../components/showoffComponents/Todo';
// import SolarSystem from '../components/showoffComponents/SolarSystem';

const Showoff = () => {
    return (
        <div className="showoff-container">
            <h2 className="showoff-header">Showoff</h2>
            <ul className="showoff-list">
                <li><BarChart /></li>
                <li><GameContainer /></li>
                <li><Calculator /></li>
                <li><RadarController /></li>
                {/* <li><SolarSystem /></li> */}
                <li className='todo-card-container'><Todo /></li>
                <li><Graph /></li>
                <li><DogApi /></li>
                {/* <li><MusicPlayer /></li> */}
                <li><Test /></li>
                <li><Bump /></li>
                {/* <li><Map /></li> */}
                {/* <li><MouseMagic /></li> */}
            </ul>
        </div>
    )
};

export default Showoff;