import React, { Dispatch, FC, SetStateAction, useCallback, useEffect, useState } from 'react'
import styles from '../../styles/FightScreen.module.css'

import useSound from 'use-sound'
import textSound from '../../assets/sounds/SND_TXT1.wav'
import { projects_choices } from '../../data/console_choices'
import ConsoleChoice from '../ConsoleChoice'

interface Props {
    setDialogueText?: Dispatch<SetStateAction<string | undefined>>
}

const ProjectsConsole: FC<Props> = ({
    setDialogueText
}) => {

    const [currentPageIndex, setCurrentPageIndex] = useState<number>(0)
    const [hoveredIndex, setHoveredIndex] = useState<number>(0)
    const [selectedIndex, setSelectedIndex] = useState<number>(-1)
    const [playTextSound] = useSound(textSound)

    const nextPage = () => {
        setCurrentPageIndex(prevIndex => prevIndex + 1 > projects_choices.length ? prevIndex - 1 : prevIndex + 1)
    }

    const prevPage = () => {
        setCurrentPageIndex(prevIndex => prevIndex - 1 < 0 ? 0 : prevIndex - 1)
    }

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        let key = e.key
        if (hoveredIndex === -1) {
            setHoveredIndex(0)
            return
        }
        if (key === "ArrowRight" || key === "d") {
            setHoveredIndex(prevIndex => prevIndex % 2 === 0 ? prevIndex + 1 : prevIndex)
        } else if (key === "ArrowLeft" || key === "a") {
            setHoveredIndex(prevIndex => prevIndex % 2 === 0 ? prevIndex : prevIndex - 1)
        } else if (key === "ArrowUp" || key === "w") {
            setHoveredIndex(prevIndex => prevIndex >= projects_choices[currentPageIndex].length / 2 ? prevIndex - projects_choices[currentPageIndex].length / 2 : prevIndex)
        } else if (key === "ArrowDown" || key === "s") {
            setHoveredIndex(prevIndex => prevIndex < projects_choices[currentPageIndex].length / 2 ? prevIndex + projects_choices[currentPageIndex].length / 2 : prevIndex)
        } else if (key === "z") {
            setSelectedIndex(hoveredIndex)
        }
    }, [hoveredIndex])

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown, true)

        return () => {
            document.removeEventListener("keydown", handleKeyDown, true)
        }
    }, [handleKeyDown])

    useEffect(() => {
        if (selectedIndex === projects_choices[currentPageIndex].length - 1) {
            projects_choices[currentPageIndex][selectedIndex].title === "Next Page" ? nextPage() : prevPage()
            setHoveredIndex(0)
            setSelectedIndex(-1)
            setDialogueText!(undefined)
            return
        }
        if (setDialogueText && selectedIndex >= 0) {
            setDialogueText(() => projects_choices[currentPageIndex][selectedIndex].dialogue || ":)")
        }
        // eslint-disable-next-line
    }, [selectedIndex])

    return (
        <div className={styles.projects_console}>
            {projects_choices[currentPageIndex].map((choice, index) => {
                if (index === projects_choices[currentPageIndex].length - 1) {
                    return <ConsoleChoice
                        key={index}
                        index={index}
                        text={choice.title}
                        isHovered={hoveredIndex === index}
                        setHoveredChoice={setHoveredIndex}
                        isSelected={selectedIndex === index}
                        setSelectedChoice={setSelectedIndex}
                        playSound={playTextSound}
                        readyToType={true}
                        pageTurn={choice.title === "Next Page" ? nextPage : prevPage}
                    />
                } else {
                    return <ConsoleChoice
                        key={index}
                        index={index}
                        text={choice.title}
                        isHovered={hoveredIndex === index}
                        setHoveredChoice={setHoveredIndex}
                        isSelected={selectedIndex === index}
                        setSelectedChoice={setSelectedIndex}
                        playSound={playTextSound}
                        readyToType={true}
                    />
                }
            })}
        </div>
    )
}

export default ProjectsConsole