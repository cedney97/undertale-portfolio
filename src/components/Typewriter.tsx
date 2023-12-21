import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { PlayFunction } from 'use-sound/dist/types'
import styles from '../styles/FightScreen.module.css'

interface Props {
    text: string,
    delay: number,
    playSound?: PlayFunction,
    readyToType?: boolean,
    setReadyToType?: Dispatch<SetStateAction<boolean>>
}

const Typewriter: FC<Props> = ({
    text,
    delay,
    playSound,
    readyToType,
    setReadyToType
}) => {
    const [audioDelay, setAudioDelay] = useState<boolean>(true)
    const [currentText, setCurrentText] = useState<string>("")
    const [currentIndex, setCurrentIndex] = useState<number>(0)


    useEffect(() => {
        if (currentIndex < text.length && readyToType) {
            const timeout = setTimeout(() => {
                if (playSound && audioDelay) {
                    setAudioDelay(false)
                    playSound()
                } else {
                    setAudioDelay(true)
                }
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        } else {
            if (setReadyToType) {
                setReadyToType(true)
            }
        }
    }, [currentIndex, delay, text, readyToType]);

    return <>
        {currentText.split("\\n").map((line, index) => {
            return <div key={index}>{line}</div>
        })}
    </>
}

export default Typewriter