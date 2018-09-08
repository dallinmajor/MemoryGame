import React from 'react';
import './Nav.css';
import GOTlogo from '../../images/game-of-thrones-logo-vector-png--1850.png'

const Nav = ({ score, highscore, prompt }) => (
    <div>
        <nav className="navbar navbar-light blue-color fixed-top">
            <div className="row width-100">
                <div className="col-md-4 text-center padding-col">
                    <img className="logo" src={GOTlogo} alt="Games of Thrones"/>
                </div>
                <div className="col-md-4 text-center padding-col"><p >{prompt}</p>
                </div>
                <div className="col-md-4 text-center padding-col"><p><strong>Score: {score} | High Score: {highscore}</strong></p>
                </div>
            </div>
        </nav>
    </div>
);

export default Nav;
