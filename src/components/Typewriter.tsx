import React, { FC, useEffect, useState } from 'react'
import { PlayFunction } from 'use-sound/dist/types'

interface Props {
    text: string,
    delay: number,
    playSound?: PlayFunction
}

const Typewriter: FC<Props> = ({ text, delay, playSound }) => {
    const [currentText, setCurrentText] = useState<string>("")
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                if (playSound) {
                    playSound()
                }
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>
}

export default Typewriter