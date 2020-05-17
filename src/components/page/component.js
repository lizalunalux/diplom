import React, {useState} from "react";
import styles from "./style.module.css";


export const Page = (props) => {

    const {color, setColor} = useState("blue");

    const buttonStyle = {
        backgroundColor: "white"
    };

    return (
        <div>
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
            <section className={styles.bg}>
                <div className={styles.container}>
                    <h2 className={styles.headline}>Applying your colors <br/> to the website</h2>
                    <p className={styles.subHeadline}>This is how your webpage will look like with <br/>
                    chosen color scheme.</p>
                    <button className={styles.button}>Button</button>
                    <button className={styles.button} style={buttonStyle}>Button</button>
                </div>
            </section>
        </div>
    )
};
