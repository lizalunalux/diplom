import React from 'react';
import './App.css';
import Wheel from "./components/wheel";
import Branding from "./components/branding";
import {getColorArray} from "./components/branding/component";
import Page from "./components/page";
import MethodRadio from "./components/method-radio";
import {setSvgPathsAction} from "./redux/actions/app";
import store from "./redux/createStore";
import Slider from 'infinite-react-carousel';

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

                <div>
                    <MethodRadio/>
                    <Wheel/>
                </div>
                <Slider  dots arrows={false} className="slider" >

                    <Page/>
                    <Branding/>
                </Slider>
            </div>

        </div>

    );
}

export default App;
