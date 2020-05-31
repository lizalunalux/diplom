import React, {useEffect, useState, useLayoutEffect} from "react";
import branding from "../../img/branding.svg";
import styles from "./style.module.css";


export const getColorArray = (path, color) => {
    path = [...path];
    const colorString = "fill:" + color;
    return path.filter(path => {
        if (path.attributes.style !== undefined) {
            return path.attributes.style.textContent.includes(colorString);
        }
    });
};

export const Branding = ({svgPaths, colorsToSet}) => {

    useEffect(() => {
        if (svgPaths !== undefined)
            Object.values(svgPaths).map((colorArr, ind) => colorArr.forEach(color => color.style.fill = colorsToSet[ind]));

        // colorsToSet.map(colorArr=>colorArr.forEach(color => color.style.fill = "red"));
    }, [colorsToSet, svgPaths]);

    return (
        <div className={styles.imgWrap} id="branding">
            <object data={branding} type="image/svg+xml" className={styles.img} id="brandingObj"/>
        </div>
    )
};
