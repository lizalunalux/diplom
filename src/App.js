import React from 'react';
import './App.css';
import Wheel from "./components/wheel";
import {Branding, getColorArray} from "./components/branding/component";
import {Page} from "./components/page/component";
import MethodRadio from "./components/method-radio";


window.addEventListener("load", () => {
    const obj = document.getElementById("brandingObj");
    const svg = obj.contentDocument;
    let allNodes = svg.querySelectorAll("path");
    let t = getColorArray(allNodes, "#f57b26");
    t.forEach(color => {
        color.style.fill = "red";
    })
});


function App() {


    return (
        <div>
            <div className="app">
                <Branding/>
                <div>
                    <MethodRadio/>
                    <Wheel/>
                </div>

            </div>
            <Page/>
        </div>

    );
}

export default App;
