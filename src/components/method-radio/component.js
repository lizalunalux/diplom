import React, {useCallback} from "react";
import styles from "./style.module.css"

export const MethodRadio = ({setColorMethod}) => {
    const handleRadioClick = useCallback((e)=>{
        setColorMethod(e.target.value);
    },[setColorMethod]);

    return (
        <div className={styles.wrap}>
            <input type="radio" value="triad" id="triad" name="method" className={styles.input} defaultChecked onClick={handleRadioClick}/>
            <label htmlFor="triad" className={styles.label}>Triad </label>
            <input type="radio" value="monochromatic" id="monochromatic" name="method" className={styles.input} onClick={handleRadioClick}/>
            <label htmlFor="monochromatic" className={styles.label}> Monochromatic</label>
            <input type="radio" value="analogous" id="analogous" name="method" className={styles.input} onClick={handleRadioClick}/>
            <label htmlFor="analogous" className={styles.label}> Analogous</label>
            <input type="radio" value="splitcomplement" id="splitcomplement" name="method" className={styles.input} onClick={handleRadioClick}/>
            <label htmlFor="splitcomplement" className={styles.label}> Split complementary</label>
        </div>
    )
};
