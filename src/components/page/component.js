import React, {useState} from "react";
import styles from "./style.module.css";
import * as tinycolor from "tinycolor2"
import cat from "../../img/cat.png"
import puzzle from "../../img/puzzle.png"
import lightbulb from "../../img/lightbulb.png"

export const Page = ({colorsToSet}) => {

    return (
        <div className={styles.wrap} style={{backgroundColor: colorsToSet[0]}}>
            <header className={styles.header}>
                <h1 className={styles.logo}>Logo</h1>
                <nav>
                    <ul className={styles.nav}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Profile</li>
                    </ul>
                </nav>
            </header>
            <section className={styles.bg} style={{
                boxShadow: `inset 0 0 0 2000px ${tinycolor(colorsToSet[2]).setAlpha(.4)}`
            }}>
                <div className={styles.container}>
                    <h2 className={styles.headline}>Applying your colors <br/> to the website</h2>
                    <p className={styles.subHeadline}>This is how your webpage will look like with <br/>
                        chosen color scheme.</p>
                    <button className={styles.button} style={{
                        backgroundColor: colorsToSet[0]
                    }} data-content="Button"/>
                    <button className={styles.button} style={{
                        backgroundColor: colorsToSet[0]
                    }} data-content="Button"/>
                </div>
            </section>
            <section className={styles.boxWrap}>
                <div className={styles.box} style={{backgroundColor: colorsToSet[1]}}>
                    <div className={styles.boxIconWrap}>
                        <img src={cat} alt="" className={styles.boxIcon}/>
                    </div>
                    <h4 className={styles.boxTitle}>Lorem Ipsum</h4>
                    <p className={styles.boxText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                        euismod.</p>
                    <button className={styles.button} style={{
                        backgroundColor: colorsToSet[2]
                    }} data-content="Button"/>
                </div>
                <div className={styles.box} style={{backgroundColor: colorsToSet[1]}}>
                    <div className={styles.boxIconWrap}>
                        <img src={puzzle} alt="" className={styles.boxIcon}/>
                    </div>
                    <h4 className={styles.boxTitle}>Lorem Ipsum</h4>
                    <p className={styles.boxText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                        euismod.</p>
                    <button className={styles.button} style={{
                        backgroundColor: colorsToSet[2]
                    }} data-content="Button"/>
                </div>
                <div className={styles.box} style={{backgroundColor: colorsToSet[1]}}>
                    <div className={styles.boxIconWrap}>
                        <img src={lightbulb} alt="" className={styles.boxIcon}/>
                    </div>
                    <h4 className={styles.boxTitle}>Lorem Ipsum</h4>
                    <p className={styles.boxText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                        euismod.</p>
                    <button className={styles.button} style={{
                        backgroundColor: colorsToSet[2]
                    }} data-content="Button"/>
                </div>
            </section>
        </div>
    )
};
