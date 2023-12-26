import React, { FC } from 'react'
import styles from '../styles/StartScreen.module.css'
import startImage from '../assets/images/start.png'
import ruinsImage from '../assets/images/ruins.png'
import { Link } from 'react-router-dom'

const StartScreen: FC = () => {
    return (
        <div className={styles.start_screen}>
            <img src={ruinsImage} alt="Ruins" />
            <div className={styles.start_bar}>
                <h1>LV 1</h1>
                <h1>0:00</h1>
            </div>
            <h1>Portfolio - Home</h1>
            <Link to="/undertale-portfolio/fight" className={styles.hover}>Start</Link>
            <img src={startImage} alt="Start" />
        </div>
    )
}

export default StartScreen