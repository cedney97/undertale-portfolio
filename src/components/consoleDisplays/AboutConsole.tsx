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
    const [studentReady, setStudentReady] = useState<boolean>(false)
    const [programmerReady, setProgrammerReady] = useState<boolean>(false)
    const [musicianReady, setMusicianReady] = useState<boolean>(false)

    return (
        <div className={styles.console_content}>
            *&nbsp;
            <Typewriter
                text="Learn more about me! I'm a..."
                delay={25}
                readyToType={true}
                playSound={playTextSound}
                setReadyToType={setStudentReady}
            />
            <div className={styles.console_choices}>
                <ConsoleChoice
                    text="Student"
                    hoveredChoice={hoveredChoice}
                    setHoveredChoice={setHoveredChoice}
                    selectedChoice={selectedChoice}
                    setSelectedChoice={setSelectedChoice}
                    playSound={playTextSound}
                    readyToType={studentReady}
                    setReadyToType={setProgrammerReady}
                />
                <ConsoleChoice
                    text="Programmer"
                    hoveredChoice={hoveredChoice}
                    setHoveredChoice={setHoveredChoice}
                    selectedChoice={selectedChoice}
                    setSelectedChoice={setSelectedChoice}
                    playSound={playTextSound}
                    readyToType={programmerReady}
                    setReadyToType={setMusicianReady}
                />
                <ConsoleChoice
                    text="Musician"
                    hoveredChoice={hoveredChoice}
                    setHoveredChoice={setHoveredChoice}
                    selectedChoice={selectedChoice}
                    setSelectedChoice={setSelectedChoice}
                    playSound={playTextSound}
                    readyToType={musicianReady}
                />
            </div>
        </div>
    )
}

export default AboutConsole