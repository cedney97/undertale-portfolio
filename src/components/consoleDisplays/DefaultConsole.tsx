import React from 'react'
import styles from '../styles/FightScreen.module.css'

import Typewriter from '../Typewriter'
import useSound from 'use-sound'
import textSound from '../../assets/sounds/SND_TXT1.wav'

const DefaultConsole = () => {

    const [playTextSound] = useSound(textSound)

    return (
        <Typewriter text="Hello World!" delay={100} />
    )
}

export default DefaultConsole