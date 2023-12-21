import React, { FC, useEffect, useState } from 'react'
import { PlayFunction } from 'use-sound/dist/types'
import styles from '../styles/FightScreen.module.css'

interface Props {
    text: string,
    delay: number,
    playSound?: PlayFunction
}

const Typewriter: FC<Props> = ({ text, delay, playSound }) => {
    const [audioDelay, setAudioDelay] = useState<boolean>(true)
    const [currentText, setCurrentText] = useState<string>("")
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    useEffect(() => {
        if (currentIndex < text.length) {
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
        }
    }, [currentIndex, delay, text]);

    return <div>
        {currentText.split("\\n").map((line, index) => {
            return <div key={index}>{line}</div>
        })}
    </div>
}

export default Typewriter