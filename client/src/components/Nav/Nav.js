import React from 'react';
import './Nav.css';

const Nav = ({ string }) => (
    <div>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center">Game of Memory</h1>
                <p class="lead text-center">{string}</p>
            </div>
        </div>
    </div>
);

export default Nav;
