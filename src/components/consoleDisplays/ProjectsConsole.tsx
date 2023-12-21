import React from 'react'
import styles from '../styles/FightScreen.module.css'

import Typewriter from '../Typewriter'
import useSound from 'use-sound'
import textSound from '../../assets/sounds/SND_TXT1.wav'

const ProjectsConsole = () => {

    const [playTextSound] = useSound(textSound)

    return (
        <>
            *&nbsp;<Typewriter text="Projects Console" delay={50} playSound={playTextSound} />
        </>
    )
}

export default ProjectsConsole