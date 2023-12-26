import React from 'react'
import styles from '../../styles/FightScreen.module.css'

import Typewriter from '../Typewriter'
import useSound from 'use-sound'
import textSound from '../../assets/sounds/SND_TXT1.wav'

const HomeConsole = () => {

    const [playTextSound] = useSound(textSound)

    return (
        <div className={styles.console_content}>
            *&nbsp;
            <Typewriter
                text="Hi, I'm Cade Edney! Feel free to look around and enjoy my Undertale-themed portfolio!"
                delay={25}
                playSound={playTextSound}
                readyToType={true}
            />
        </div>
    )
}

export default HomeConsole