import React, { Dispatch, FC, SetStateAction } from 'react'
import styles from '../styles/FightScreen.module.css'
import Typewriter from './Typewriter'

interface Props {
    text: string,
    hoveredChoice: string
    setHoveredChoice: Dispatch<SetStateAction<string>>
    selectedChoice: string
    setSelectedChoice: Dispatch<SetStateAction<string>>
    playSound?: () => void
    readyToType?: boolean
    setReadyToType?: Dispatch<SetStateAction<boolean>>
}
const ConsoleChoice: FC<Props> = ({
    text,
    hoveredChoice,
    setHoveredChoice,
    selectedChoice,
    setSelectedChoice,
    playSound,
    readyToType,
    setReadyToType
}) => {
    return (
        <div
            className={text === hoveredChoice || text == selectedChoice ? styles.chosen : ""}
            onMouseEnter={() => setHoveredChoice(text)}
            onMouseLeave={() => setHoveredChoice("")}
            onClick={() => setSelectedChoice(text)}
        >
            <Typewriter
                text={text}
                delay={25}
                readyToType={readyToType}
                setReadyToType={setReadyToType}
                playSound={playSound}
            />
        </div>
    )
}

export default ConsoleChoice