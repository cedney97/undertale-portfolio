import React, { useState } from 'react'
import styles from '../../styles/FightScreen.module.css'

import ConsoleChoice from '../ConsoleChoice'
import Typewriter from '../Typewriter'
import useSound from 'use-sound'
import textSound from '../../assets/sounds/SND_TXT1.wav'

const AboutConsole = () => {

    const [hoveredChoice, setHoveredChoice] = useState<string>("")
    const [selectedChoice, setSelectedChoice] = useState<string>("")
    const [playTextSound] = useSound(textSound)
    const [optionsReady, setOptionsReady] = useState<boolean>(false)

    return (
        <div className={styles.console_content}>
            *&nbsp;
            <Typewriter
                text="Learn more about me! I'm a..."
                delay={25}
                readyToType={true}
                playSound={playTextSound}
                setReadyToType={setOptionsReady}
            />
            <div className={styles.console_choices}>
                <ConsoleChoice
                    text="Student"
                    hoveredChoice={hoveredChoice}
                    setHoveredChoice={setHoveredChoice}
                    selectedChoice={selectedChoice}
                    setSelectedChoice={setSelectedChoice}
                    readyToType={optionsReady}
                />
                <ConsoleChoice
                    text="Programmer"
                    hoveredChoice={hoveredChoice}
                    setHoveredChoice={setHoveredChoice}
                    selectedChoice={selectedChoice}
                    setSelectedChoice={setSelectedChoice}
                    readyToType={optionsReady}
                />
                <ConsoleChoice
                    text="Musician"
                    hoveredChoice={hoveredChoice}
                    setHoveredChoice={setHoveredChoice}
                    selectedChoice={selectedChoice}
                    setSelectedChoice={setSelectedChoice}
                    readyToType={optionsReady}
                />
            </div>
        </div>
    )
}

export default AboutConsole