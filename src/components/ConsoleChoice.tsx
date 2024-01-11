import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import styles from '../styles/FightScreen.module.css'
import Typewriter from './Typewriter'
import classNames from 'classnames'

interface Props {
    index: number,
    text: string,
    isHovered: boolean
    setHoveredChoice: Dispatch<SetStateAction<number>>
    isSelected: boolean
    setSelectedChoice: Dispatch<SetStateAction<number>>
    playSound?: () => void
    readyToType?: boolean
    setReadyToType?: Dispatch<SetStateAction<boolean>>
}
const ConsoleChoice: FC<Props> = ({
    index,
    text,
    isHovered,
    setHoveredChoice,
    isSelected,
    setSelectedChoice,
    playSound,
    readyToType,
    setReadyToType
}) => {

    const cx = classNames.bind(styles)
    const [beforeToggle, setBeforeToggle] = useState<boolean>(false)

    return (
        <div
            className={cx(isHovered && styles.hover, isSelected && styles.selected, beforeToggle && styles.asterisk)}
            onMouseEnter={() => setHoveredChoice(index)}
            onMouseLeave={() => setHoveredChoice(-1)}
            onClick={() => setSelectedChoice(index)}
        >
            <Typewriter
                text={text}
                delay={25}
                readyToType={readyToType}
                setReadyToType={setReadyToType}
                playSound={playSound}
                setBeforeToggle={setBeforeToggle}
            />
        </div>
    )
}

export default ConsoleChoice