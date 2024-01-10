import React, { FC } from 'react'

import styles from '../styles/FightScreen.module.css'
import avatar from '../assets/images/avatar.png'
import classNames from 'classnames'
import Typewriter from './Typewriter'
import textSound from '../assets/sounds/snd-textsans.mp3'
import useSound from 'use-sound'

interface Props {
    dialogueText?: string
}

const CharacterDisplay: FC<Props> = ({
    dialogueText
}) => {

    let cx = classNames.bind(styles)
    let [playText] = useSound(textSound, {
        volume: 0.1
    })

    const divs = []
    for (let i = 0; i < 12; ++i) {
        if (i === 8) {
            divs.push(
                <div key={i}>
                    <img src={avatar} id={styles.avatar} />
                </div>
            )
        } else if (i === 9 && dialogueText) {
            divs.push(
                <div key={i}>
                    <span className={styles.arrow}></span>
                    <p className={cx(styles.dialogue_box, styles.pixel_corners)}>
                        <Typewriter
                            text={dialogueText}
                            delay={25}
                            readyToType={true}
                            playSound={playText}
                        />
                    </p>
                </div>
            )
        } else {
            divs.push(<div key={i}></div>)
        }
    }

    return (
        <div className={styles.grid}>
            {divs}
        </div>
    )
}

export default CharacterDisplay