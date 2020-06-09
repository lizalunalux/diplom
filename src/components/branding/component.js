import React, {useEffect} from "react";
import branding from "../../img/branding.svg";
import styles from "./style.module.css";

export const Branding = ({svgPaths, colorsToSet}) => {
    useEffect(() => {
        if (svgPaths !== undefined){
            Object.values(svgPaths)
                .map((colorArr, ind) => colorArr
                .forEach(color => color.style.fill = colorsToSet[ind]));
        }
    }, [colorsToSet, svgPaths]);

    return (
        <div className={styles.imgWrap} id="branding">
            <object data={branding} type="image/svg+xml" className={styles.img} id="brandingObj"/>
        </div>
    )
};
