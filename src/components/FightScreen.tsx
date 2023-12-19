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

    const [playActionSelect] = useSound(actionSelect)
    const [playSelect] = useSound(select)

    const [hoveredActionIndex, setHoveredActionIndex] = useState<number>(0)
    const [hoveredAction, setHoveredAction] = useState<ActionButtonData>(action_buttons[hoveredActionIndex])

    useEffect(() => {
        setHoveredAction(action_buttons[hoveredActionIndex])
    }, [hoveredActionIndex])

    useEffect(() => {
        playActionSelect()
        // eslint-disable-next-line
    }, [hoveredAction])

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown, true)

        return () => {
            document.removeEventListener("keydown", handleKeyDown, true)
        }
    }, [])

    const handleKeyDown = (e: KeyboardEvent) => {
        e.preventDefault()
        const keyPressed = e.key
        if (keyPressed === "ArrowLeft" || keyPressed === "a") {
            setHoveredActionIndex(prevIndex => prevIndex - 1 > -1 ? prevIndex - 1 : prevIndex)
        } else if (keyPressed === "ArrowRight" || keyPressed === "d") {
            setHoveredActionIndex(prevIndex => prevIndex + 1 < action_buttons.length ? prevIndex + 1 : prevIndex)
        } else if (keyPressed === "z") {
            console.log("pressed z")
            playSelect()
        }
    }

    return (
        <div className={styles.fight_screen}>
            <CharacterDisplay />
            <Console />
            <UserBar />
            <div className={styles.action_buttons}>
                {
                    action_buttons.map((action, index) => (
                        <ActionButton
                            key={index}
                            data={action}
                            isSelected={hoveredAction === action}
                            setIsSelected={() => setHoveredAction(action)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default FightScreen