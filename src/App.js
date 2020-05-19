import React from 'react';
import './App.css';
import Wheel from "./components/wheel";
import Branding from "./components/branding";
import {getColorArray} from "./components/branding/component";
import {Page} from "./components/page/component";
import MethodRadio from "./components/method-radio";
import {setSvgPathsAction} from "./redux/actions/app";
import store from "./redux/createStore";

window.addEventListener("load", () => {
    const obj = document.getElementById("brandingObj");
    const svg = obj.contentDocument;
    let allNodes = svg.querySelectorAll("path");
    const firstColor = getColorArray(allNodes, "#f57b26");
    const secondColor = getColorArray(allNodes, "#ff4b30");
    const thirdColor = getColorArray(allNodes, "#394240");
    store.dispatch(setSvgPathsAction({firstColor, secondColor, thirdColor}));
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
