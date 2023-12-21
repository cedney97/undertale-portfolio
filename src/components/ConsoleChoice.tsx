import React, { Dispatch, FC, SetStateAction } from 'react'
import styles from '../styles/FightScreen.module.css'

interface Props {
    text: string,
    hoveredChoice: string
    setHoveredChoice: Dispatch<SetStateAction<string>>
    selectedChoice: string
    setSelectedChoice: Dispatch<SetStateAction<string>>
}
const ConsoleChoice: FC<Props> = ({
    text,
    hoveredChoice,
    setHoveredChoice,
    selectedChoice,
    setSelectedChoice
}) => {
    return (
        <div
            className={text === hoveredChoice || text == selectedChoice ? styles.chosen : ""}
            onMouseEnter={() => setHoveredChoice(text)}
            onMouseLeave={() => setHoveredChoice("")}
            onClick={() => setSelectedChoice(text)}
        >
            {text}
        </div>
    )
}

export default ConsoleChoice