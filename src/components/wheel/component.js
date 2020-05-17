import React, {useCallback, useEffect, useState} from "react";
import iro from "@jaames/iro";
import styles from "./style.module.css"
import * as tinycolor from "tinycolor2"


export const Wheel = ({colorMethod, picker}) => {
    const [combinations, setCombinations] = useState(tinycolor("#f00").triad());

    const updateColors = (color) => {
        const newComb = tinycolor(color)[colorMethod](3, 5).map(curr => curr.toHexString());
        setCombinations(newComb);
        picker.setColors(newComb);
    };

    const handleColorChange = useCallback((color) => {
        updateColors(color.hexString);
    }, [colorMethod]);

    useEffect(() => { //setting up picker on mount
        picker.on('color:change', handleColorChange);
    }, []);

    useEffect(() => {
        picker.off('color:change', handleColorChange);
        updateColors(combinations[0]);
        picker.on('color:change', handleColorChange);
    }, [colorMethod]);

    return (
        <div className={styles.wrap}>
            <div id="picker"/>
            <div className={styles.combinations}>
                <div style={{
                    backgroundColor: combinations[0]
                }}/>
                <div style={{
                    backgroundColor: combinations[1]
                }}/>
                <div style={{
                    backgroundColor: combinations[2]
                }}/>

            </div>
        </div>
    )
};
