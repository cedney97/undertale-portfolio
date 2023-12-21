import React, { FC, useState, useEffect } from 'react'

import styles from '../styles/FightScreen.module.css'
import ActionButton from './ActionButton'
import { ActionButtonData } from '../data/types'
import { action_buttons } from '../data/action_buttons'
import useSound from 'use-sound'
import actionSelect from '../assets/sounds/snd_squeak.wav'
import select from '../assets/sounds/snd_select.wav'
import UserBar from './UserBar'
import Console from './Console'
import CharacterDisplay from './CharacterDisplay'

const FightScreen: FC = () => {

    const [playHover] = useSound(actionSelect)
    const [playSelect] = useSound(select)

    const [debounce, setDebounce] = useState<boolean>(false)
    const [hoveredActionIndex, setHoveredActionIndex] = useState<number>(0)
    const [selectedActionIndex, setSelectedActionIndex] = useState<number>(0)

    useEffect(() => {
        if (!debounce && hoveredActionIndex !== selectedActionIndex && hoveredActionIndex !== -1) {
            playHover()
            setDebounce(() => {
                setTimeout(() => {
                    setDebounce(() => false)
                }, 200)
                return true
            })
        }
        // eslint-disable-next-line
    }, [hoveredActionIndex])

    useEffect(() => {
        playSelect()
    }, [selectedActionIndex])

    // useEffect(() => {
    //     document.addEventListener("keydown", handleKeyDown, true)

    //     return () => {
    //         document.removeEventListener("keydown", handleKeyDown, true)
    //     }
    // }, [])

    // const handleKeyDown = (e: KeyboardEvent) => {
    //     const keyPressed = e.key
    //     if (keyPressed === "ArrowLeft" || keyPressed === "a") {
    //         setHoveredActionIndex(prevIndex => prevIndex - 1 > -1 ? prevIndex - 1 : prevIndex)
    //     } else if (keyPressed === "ArrowRight" || keyPressed === "d") {
    //         setHoveredActionIndex(prevIndex => prevIndex + 1 < action_buttons.length ? prevIndex + 1 : prevIndex)
    //     } else if (keyPressed === "z") {
    //         console.log("here")
    //         setSelectedActionIndex(hoveredIndex)
    //     }
    // }

    return (
        <div className={styles.fight_screen}>
            <CharacterDisplay />
            <Console
                selectedAction={action_buttons[selectedActionIndex].console}
            />
            <UserBar />
            <div className={styles.action_buttons}>
                {
                    action_buttons.map((action, index) => (
                        <ActionButton
                            key={index}
                            data={action}
                            isSelected={selectedActionIndex === index}
                            setSelectedIndex={setSelectedActionIndex}
                            isHovered={hoveredActionIndex === index}
                            setHoveredIndex={setHoveredActionIndex}
                            index={index}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default FightScreen