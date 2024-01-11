import React, { Dispatch, FC, SetStateAction, useCallback, useEffect, useState } from 'react'
import styles from '../../styles/FightScreen.module.css'

import ConsoleChoice from '../ConsoleChoice'
import Typewriter from '../Typewriter'
import useSound from 'use-sound'
import textSound from '../../assets/sounds/SND_TXT1.wav'
import { about_choices } from '../../data/console_choices'

interface Props {
    setDialogueText?: Dispatch<SetStateAction<string>>
}

const AboutConsole: FC<Props> = ({
    setDialogueText
}) => {

    const [playTextSound] = useSound(textSound)
    const [optionsReady, setOptionsReady] = useState<boolean>(false)
    const [selectedIndex, setSelectedIndex] = useState<number>(-1)
    const [hoveredIndex, setHoveredIndex] = useState<number>(-1)

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        let key = e.key
        if (key === "ArrowLeft" || key === "a") {
            setHoveredIndex(prevIndex => prevIndex - 1 > -1 ? prevIndex - 1 : prevIndex)
        } else if (key === "ArrowRight" || key === "d") {
            setHoveredIndex(prevIndex => prevIndex + 1 < about_choices.length ? prevIndex + 1 : prevIndex)
        } else if (key === "z") {
            setSelectedIndex(hoveredIndex)
        }
    }, [hoveredIndex])

    useEffect(() => {
        if (setDialogueText && selectedIndex >= 0) {
            setDialogueText(() => about_choices[selectedIndex].dialogue || ":)")
        }
        // eslint-disable-next-line
    }, [selectedIndex])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown, true)

        return () => {
            window.removeEventListener('keydown', handleKeyDown, true)
        }
    }, [handleKeyDown])

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
                {about_choices.map((choice, index) => {
                    return <ConsoleChoice
                        key={index}
                        index={index}
                        text={choice.title}
                        isHovered={hoveredIndex === index}
                        setHoveredChoice={setHoveredIndex}
                        isSelected={selectedIndex === index}
                        setSelectedChoice={setSelectedIndex}
                        playSound={playTextSound}
                        readyToType={optionsReady}
                    />
                })}
            </div>
        </div>
    )
}

export default AboutConsole