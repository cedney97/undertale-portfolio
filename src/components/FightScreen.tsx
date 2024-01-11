import React, { FC, useState, useEffect, useCallback, ReactElement } from 'react'

import styles from '../styles/FightScreen.module.css'
import ActionButton from './ActionButton'
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
    const [dialogueText, setDialogueText] = useState<string | undefined>(undefined)
    const [repo, setRepo] = useState<string | undefined>(undefined)
    const [link, setLink] = useState<string | undefined>(undefined)
    const [technologies, setTechnologies] = useState<string[] | undefined>(undefined)

    const ABOUT_INDEX = 1
    const PROJECTS_INDEX = 2

    const isInProjects = () => {
        return selectedActionIndex === PROJECTS_INDEX
    }

    const isInAbout = () => {
        return selectedActionIndex === ABOUT_INDEX
    }

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
        setDialogueText(() => action_buttons[selectedActionIndex].dialogueText)
        // eslint-disable-next-line
    }, [selectedActionIndex])

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        const keyPressed = e.key
        if (!isInProjects() && !isInAbout()) {
            if (keyPressed === "ArrowLeft" || keyPressed === "a") {
                setHoveredActionIndex(prevIndex => prevIndex - 1 > -1 ? prevIndex - 1 : prevIndex)
            } else if (keyPressed === "ArrowRight" || keyPressed === "d") {
                setHoveredActionIndex(prevIndex => prevIndex + 1 < action_buttons.length ? prevIndex + 1 : prevIndex)
            } else if (keyPressed === "z") {
                setSelectedActionIndex(hoveredActionIndex)
            }
        }
        if (keyPressed === "x") {
            setSelectedActionIndex(0)
            setHoveredActionIndex(0)
        }
        // eslint-disable-next-line
    }, [hoveredActionIndex])

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown, true)

        return () => {
            document.removeEventListener("keydown", handleKeyDown, true)
        }
    }, [handleKeyDown])

    const getConsole = () => {
        let cons = action_buttons[selectedActionIndex].console
        if (isInProjects()) {
            cons = React.cloneElement(cons as ReactElement<any>, {
                setDialogueText: setDialogueText,
                setRepo: setRepo,
                setLink: setLink,
                setTechnologies: setTechnologies
            })
        } else if (isInAbout()) {
            cons = React.cloneElement(cons as ReactElement<any>, {
                setDialogueText: setDialogueText
            })
        }
        return cons
    }

    return (
        <div className={styles.fight_screen}>
            <CharacterDisplay
                dialogueText={dialogueText}
                repo={repo}
                link={link}
                technologies={technologies}
            />
            <Console
                selectedAction={getConsole()}
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