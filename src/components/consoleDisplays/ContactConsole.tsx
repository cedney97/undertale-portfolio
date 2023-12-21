import React, { useEffect, useState } from 'react'
import styles from '../../styles/FightScreen.module.css'

import Typewriter from '../Typewriter'
import useSound from 'use-sound'
import textSound from '../../assets/sounds/SND_TXT1.wav'

const ContactConsole = () => {

    const [playTextSound] = useSound(textSound)

    const [emailType, setEmailType] = useState<boolean>(false)
    const [checkType, setCheckType] = useState<boolean>(false)
    const [gitHubType, setGitHubType] = useState<boolean>(false)
    const [moreType, setMoreType] = useState<boolean>(false)

    useEffect(() => {
        console.log("ready to type check", checkType)
    }, [checkType])

    return (
        <div className={styles.console_content} style={{ flexDirection: "row" }}>
            *&nbsp;
            <Typewriter
                text="Feel free to email me at"
                delay={25}
                playSound={playTextSound}
                readyToType={true}
                setReadyToType={setEmailType}
            />
            &nbsp;
            <a href="mailto:cadeedney@gmail.com" className={styles.chosen}>
                <Typewriter
                    text="cadeedney@gmail.com"
                    delay={25}
                    playSound={playTextSound}
                    readyToType={emailType}
                    setReadyToType={setCheckType}
                />
            </a>
            &nbsp;
            <span>
                <Typewriter
                    text="or check out my"
                    delay={25}
                    playSound={playTextSound}
                    readyToType={checkType}
                    setReadyToType={setGitHubType}
                />
            </span>
            &nbsp;
            <a href="https://github.com/cedney97">
                <Typewriter
                    text="GitHub"
                    delay={25}
                    playSound={playTextSound}
                    readyToType={gitHubType}
                    setReadyToType={setMoreType}
                />
            </a>
            & nbsp;
            <span>
                <Typewriter
                    text="for more of my work!"
                    delay={25}
                    playSound={playTextSound}
                    readyToType={moreType}
                />
            </span>
        </div >
    )
}

export default ContactConsole