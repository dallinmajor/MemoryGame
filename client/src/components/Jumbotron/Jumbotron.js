import React from 'react';
import './Jumbotron.css';

const Jumbotron = () => (
    <div>
        <div className="jumbotron jumbotron-fluid top-margin">
            <div className="container">
                <h1 className="display-4n text-center">Game of Memory</h1>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>Click on an image to earn points, but don't click on any more than once or you might die!</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
)

export default Jumbotron;