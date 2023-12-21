import React, { useState } from 'react'
import styles from '../../styles/FightScreen.module.css'

import ConsoleChoice from '../ConsoleChoice'

const AboutConsole = () => {

    const [hoveredChoice, setHoveredChoice] = useState<string>("")
    const [selectedChoice, setSelectedChoice] = useState<string>("")

    return (
        <div className={styles.console_content}>
            *&nbsp;Learn more about me, I am a...
            <div className={styles.console_choices}>
                <ConsoleChoice
                    text="Student"
                    hoveredChoice={hoveredChoice}
                    setHoveredChoice={setHoveredChoice}
                    selectedChoice={selectedChoice}
                    setSelectedChoice={setSelectedChoice}
                />
                <ConsoleChoice
                    text="Programmer"
                    hoveredChoice={hoveredChoice}
                    setHoveredChoice={setHoveredChoice}
                    selectedChoice={selectedChoice}
                    setSelectedChoice={setSelectedChoice}
                />
                <ConsoleChoice
                    text="Musician"
                    hoveredChoice={hoveredChoice}
                    setHoveredChoice={setHoveredChoice}
                    selectedChoice={selectedChoice}
                    setSelectedChoice={setSelectedChoice}
                />
            </div>
        </div>
    )
}

export default AboutConsole