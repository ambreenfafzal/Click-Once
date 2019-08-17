import React from 'react';
import './style.css';
import One from "./assets/images/one.jpg";
import Two from "./assets/images/two.jpg";
import Three from "./assets/images/three.jpg";
import Four from "./assets/images/four.jpg";
import Five from "./assets/images/five.jpg";
import Six from "./assets/images/six.jpg";
import Seven from "./assets/images/seven.jpg";
import Eight from "./assets/images/eight.jpg";
import Nine from "./assets/images/thirteen.jpg";
import Ten from "./assets/images/ten.jpg";
import Eleven from "./assets/images/eleven.jpg";
import Twelve from "./assets/images/twelve.jpg";


function Photos() {
    return (
        <div className="container">
            <div className="row">
                <div className="column">
                <img src={One} className="one" alt="logo" />
                </div>
                <div className="column">
                <img src={Two} className="one" alt="logo" />
                </div>
                <div className="column">
                <img src={Three} className="one" alt="logo" />
                </div>

            </div>

            <div className="row">
                <div className="column">
                <img src={Four} className="one" alt="logo" />
                </div>
                <div className="column">
                <img src={Five} className="one" alt="logo" />
                </div>
                <div className="column">
                <img src={Six} className="one" alt="logo" />
                </div>

            </div>

            <div className="row">
                <div className="column">
                <img src={Seven} className="one" alt="logo" />
                </div>
                <div className="column">
                <img src={Eight} className="one" alt="logo" />
                </div>
                <div className="column">
                <img src={Nine} className="one" alt="logo" />
                </div>

            </div>

            <div className="row">
                <div className="column">
                <img src={Ten} className="one" alt="logo" />
                </div>
                <div className="column">
                <img src={Eleven} className="one" alt="logo" />
                </div>
                <div className="column">
                <img src={Twelve} className="one" alt="logo" />
                </div>

            </div>

        </div>
    );
}

export default Photos;




