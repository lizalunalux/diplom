import React, {useCallback, useEffect, useState} from "react";
import styles from "./style.module.css"
import * as tinycolor from "tinycolor2"

let ticking = false;

export const Wheel = ({colorMethod, picker, setColorsToSet}) => {
    const [combinations, setCombinations] = useState(tinycolor("#f00").triad());

    const updateColors = (color) => {
        const newComb = tinycolor(color)[colorMethod](3, 5).map(curr => curr.toHexString());
        setCombinations(newComb);
        picker.setColors(newComb);
        setColorsToSet(newComb);
    };

    const handleColorChange = useCallback((color) => {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                updateColors(color.hexString);
                ticking = false;
            });
            ticking = true;
        }

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
                <div style={{backgroundColor: combinations[0]}}>
                   <span>
                       {combinations[0].toString()}
                   </span>
                </div>
                <div style={{backgroundColor: combinations[1]}}>
                    <span>
                    {combinations[1].toString()}
                    </span>

                </div>
                <div style={{
                    backgroundColor: combinations[2]
                }}>
                    <span>
                         {combinations[2].toString()}
                    </span>
                </div>

            </div>
        </div>
    )
};
